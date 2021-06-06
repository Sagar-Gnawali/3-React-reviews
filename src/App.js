import React from 'react';
import Review from './components/review.js';
import Typography, {} from '@material-ui/core/Typography';
function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <Typography variant="h4">Our Reviews</Typography>
          <div className="underline"></div>
        </div>
        <Review/>
      </section>
    </main>
  );
}

export default App;
