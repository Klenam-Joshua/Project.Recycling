export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <h2>Why Choose RecycHero?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <i data-lucide="recycle" className="feature-icon"></i>
            <h3>Learn & Earn</h3>
            <p>
              Complete educational modules and earn points while learning about
              recycling best practices.
            </p>
          </div>
          <div className="feature-card">
            <i data-lucide="leaf" className="feature-icon"></i>
            <h3>Track Impact</h3>
            <p>
              Monitor your recycling progress and see your real environmental
              impact in real-time.
            </p>
          </div>
          <div className="feature-card">
            <i data-lucide="globe" className="feature-icon"></i>
            <h3>Global Community</h3>
            <p>
              Join a worldwide community of eco-conscious individuals making a
              difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
