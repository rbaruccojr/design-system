/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import PropTypes from 'prop-types';

class SvgIcon extends React.Component {
  render() {
    const { sprite, symbol, ...rest } = this.props;

    return (
      <svg {...rest} aria-hidden>
        <use xlinkHref={this.getHref()} />
      </svg>
    );
  }

  getHref() {
    if (!(this.props.sprite && this.props.symbol)) {
      return;
    }

<<<<<<< HEAD:ui/shared/svg-icon/index.jsx
    const { sprite, symbol } = this.props;
    const href = `/assets/icons/${sprite}-sprite/svg/symbols.svg#${symbol}`;
    return href;
  }
}

SvgIcon.propTypes = {
  className: PropTypes.string,
  sprite: PropTypes.string,
  symbol: PropTypes.string
};

export default SvgIcon;
=======
    <h2 className="site-text-heading--large">
      <Link to="/getting-started/heroku">Heroku</Link>
    </h2>
    <p>
      How to use the {globals.displayName} within a static Heroku application.
    </p>

  </PageBody>
);
>>>>>>> f4713db99 (Clean up heroku tuts: relative links, CTALinks, SEO meaningful steps, other links in global/index.js/, and add link to getting-started/index.jsx):site/getting-started/index.jsx
