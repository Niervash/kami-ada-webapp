import React, { Suspense, lazy, useEffect, useState } from "react";
import V1 from "../../../Assets/japan.png"; // Ensure this is a valid image path
import V2 from "../../../Assets/jastip_jpn.jpg"; // Ensure this is a valid image path

const Card = lazy(() =>
  import("../../../bases/Card/Card").then((module) => ({
    default: module.Card,
  }))
);

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error Boundary Caught: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export const UserMenuView = () => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  // Sample data for demonstration
  const allCards = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    source: index % 2 === 0 ? V1 : V2, // Alternate between V1 and V2
  }));

  useEffect(() => {
    loadMoreCards(); // Load initial cards on component mount

    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 500
      ) {
        loadMoreCards(); // Load more cards when scrolled near the bottom
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  const loadMoreCards = () => {
    const nextCards = allCards.slice(
      (page - 1) * itemsPerPage,
      page * itemsPerPage
    );
    setCards((prev) => [...prev, ...nextCards]);
    setPage((prev) => prev + 1);
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <section className="max-w-screen-xl mx-auto py-30">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
            <Suspense fallback={<div>Loading...</div>}>
              {cards.map((card) => (
                <Card
                  key={card.id}
                  source={card.source}
                  className="shadow-lg rounded-lg transition-transform transform hover:scale-105"
                />
              ))}
            </Suspense>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
};
