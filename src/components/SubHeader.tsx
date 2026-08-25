import { SITE } from '../data/site'

export function SubHeader() {
  return (
    <div className="subheader-soc">
      <div className="container">
        <div className="subheader-soc_cont">
          <div className="subheader-soc_phone">
            <div className="subheader-soc_itm">
              <img src="/images/us.svg" className="phone__flag" alt="US" />
              <a href={SITE.phoneHref}>{SITE.phone}</a>
            </div>
          </div>
          <a className="email__line" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
        </div>
      </div>
    </div>
  )
}
