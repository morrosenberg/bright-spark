class TestsController < ApplicationController
  before_action :set_test, only: [:index]
  
  # GET /tests
  # GET /tests.json
  def index
    begin
      @scores = []
      @taken = session[:questions_taken] || 0
      @total = ((session[:score].to_f / session[:questions_taken].to_f) * 100).round.to_s if session[:score]
      a = *(0..session[:answers].length-1)
      if a.any? {|param| params.include?(param.to_s) }
        session[:answers].each_with_index do |answer, ind|
          if params[ind.to_s] == answer.to_s
            params[ind] = nil
            @scores[ind] = 1
            session[:score] = (session[:score] || 0) + @scores[ind]
            session[:questions_taken] = (session[:questions_taken] || 0) + 1
            session[:answers][ind] = "Undefined"
          else
            params[ind] = nil
            @scores[ind] = 0
            session[:score] = (session[:score] || 0) + @scores[ind]
            session[:questions_taken] = (session[:questions_taken] || 0) + 1
            session[:answers][ind] = "Undefined"
          end
        end
        redirect_to '/tests'
      end
    rescue Exception => e
      p "There was an error #{e}"
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_test
      if params[:test]
        mq = MathQuestions::MathQuestions.new
        @test = mq.test
        @questions = mq.test[:questions]
        p "The questions are", @questions, "\n"
        session[:answers] = mq.test[:answers]
        p "The answers are", session[:answers], "\n"
        params[:test] = false
      end
    end
end
