import ContentLoader from "react-content-loader";

const ResultLoader = (props) => (
  <ContentLoader
    uniqueKey="loader"
    title="Loading Posts..."
    speed={2}
    viewBox="0 0 1000 130"
    backgroundColor="#e6e6e6"
    foregroundColor="#341aff"
    {...props}
  >
    <rect x="5" y="5" rx="0" ry="0" width="120" height="35" />
    <rect x="5" y="55" rx="15" ry="15" width="600" height="30" />
    <rect x="5" y="95" rx="0" ry="0" width="70" height="35" />

    {/*<rect x="0" y="130" rx="0" ry="0" width="1000" height="50" /> 
    <rect x="60" y="190" rx="5" ry="5" width="70" height="30" /> */}
  </ContentLoader>
);
const CandidatesLoader = (props) => (
  <ContentLoader
    uniqueKey="loader"
    title="Loading Posts..."
    speed={2}
    viewBox="0 0 800 100"
    backgroundColor="#e6e6e6"
    foregroundColor="#341aff"
    {...props}
  >
    <circle cx="70" cy="50" r="50" />
    <rect x="150" y="32" rx="5" ry="5" width="200" height="40" />
  </ContentLoader>
);
export { ResultLoader, CandidatesLoader };
