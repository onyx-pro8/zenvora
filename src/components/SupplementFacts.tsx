import { PRODUCT, SUPPLEMENT_FACTS } from '../data/site'

export function SupplementFacts() {
  return (
    <section className="facts-section" id="facts">
      <div className="container facts-layout">
        <div className="facts-copy">
          <span className="section-label">Transparency</span>
          <h2 className="main-title" style={{ textAlign: 'left', margin: '0 0 12px' }}>
            Supplement Facts
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'left', margin: '0 0 20px' }}>
            Serving Size: {PRODUCT.servingSize} · Servings Per Container: {PRODUCT.servings}
          </p>
          <div className="facts-table-wrap">
            <table className="facts-table">
              <thead>
                <tr>
                  <th>Amount Per Serving</th>
                  <th>Amount</th>
                  <th>%DV</th>
                </tr>
              </thead>
              <tbody>
                {SUPPLEMENT_FACTS.map((row) => (
                  <tr key={row.nutrient}>
                    <td>{row.nutrient}</td>
                    <td>{row.amount}</td>
                    <td>{row.dv || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="facts-note">
            Nitric Oxide Complex (6853mg): Organic Beet Root Powder, Organic Pomegranate Juice
            Powder, OxyStorm® Red Spinach Extract, and BioPerine® Black Pepper Extract. Other
            ingredients: Natural Flavors, Malic Acid, Organic Stevia Leaf Extract, Rice Concentrate.
            † Daily Value not established.
          </p>
        </div>
        <div className="facts-visual">
          <img src="/images/product/label-back.png" alt="zenvora Nitric Oxide supplement facts label" />
        </div>
      </div>
    </section>
  )
}
