
export default function ModelProfile() {
  const measurements = [
    { label: 'BUST', value: '26 in' },
    { label: 'WAIST', value: '19 in' },
    { label: 'HIPS', value: '33 in' },
    { label: 'DRESS SIZE', value: 'UK 6' },
    { label: 'SHOE SIZE', value: 'EU 38' },
    { label: 'LOCATION', value: 'Accra, Ghana' },
  ]

  return (
    <section className="model-profile" id="model-profile">
      <div className="model-profile-header">
        <span className="section-label">MODEL DETAILS</span>
        <h2>The Model</h2>
        <p>A closer look at my measurements and profile.</p>
      </div>

      <div className="model-profile-height">
        <span>HEIGHT</span>
        <h3>177 <small>CM</small></h3>
      </div>

      <div className="measurements-grid">
        {measurements.map((item) => (
          <div className="measurement-item" key={item.label}>
            <span>{item.label}</span>
            <h3>{item.value}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
