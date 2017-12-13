import React, { Component } from 'react';
import '../../Styles/_social.scss';

export default class Social extends Component {
  render() {
    return (
      <div>
        <ul className="social-network social-circle text-center">
          <li>
            <a href="#" className="icoInstagram" title="Rss"><i className="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" className="icoGoogle" title="Google"><i className="fa fa-google"></i>
            </a>
          </li>
          <li>
            <a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
