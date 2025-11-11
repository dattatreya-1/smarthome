async function generatePropertyAnalysisMock(listing) {
  return {
    description: `Mock analysis for ${listing?.address || 'unknown'}`,
    currentValue: 100000,
    potentialValue: 120000,
    roi: 0.2
  };
}
module.exports = { generatePropertyAnalysisMock };
