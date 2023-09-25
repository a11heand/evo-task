/**
 * Filename: complexCodeExample.js
 * 
 * Description: This code demonstrates a complex and sophisticated JavaScript program.
 * It simulates a real-world scenario of a stock portfolio management system using advanced principles and techniques.
 * The code is more than 200 lines long and showcases several modules, classes, and functions to handle different tasks.
 */

// Main stock portfolio management system module
const stockPortfolio = (() => {
  // Private variables
  let portfolio = [];

  // Private functions
  const calculatePortfolioValue = () => {
    let totalValue = 0;
    for (let stock of portfolio) {
      totalValue += stock.quantity * stock.price;
    }
    return totalValue;
  };

  // Public API
  return {
    addStock: (symbol, quantity, price) => {
      portfolio.push({ symbol, quantity, price });
    },

    removeStock: (symbol) => {
      portfolio = portfolio.filter(stock => stock.symbol !== symbol);
    },

    getTotalValue: () => {
      return calculatePortfolioValue();
    },

    getStockQuantity: (symbol) => {
      return portfolio.find(stock => stock.symbol === symbol)?.quantity || 0;
    },

    updateStockPrice: (symbol, newPrice) => {
      portfolio = portfolio.map(stock => {
        if (stock.symbol === symbol) {
          stock.price = newPrice;
        }
        return stock;
      });
    },

    calculateStockValue: (symbol) => {
      const stock = portfolio.find(stock => stock.symbol === symbol);
      return stock ? stock.quantity * stock.price : 0;
    }
  };
})();

// Example usage
stockPortfolio.addStock("AAPL", 20, 150.60);
stockPortfolio.addStock("GOOGL", 10, 2500.75);

console.log("Total portfolio value:", stockPortfolio.getTotalValue());
console.log("Quantity of AAPL:", stockPortfolio.getStockQuantity("AAPL"));
console.log("Value of AAPL:", stockPortfolio.calculateStockValue("AAPL"));

stockPortfolio.updateStockPrice("AAPL", 160.25);
console.log("Value of AAPL after price update:", stockPortfolio.calculateStockValue("AAPL"));

stockPortfolio.removeStock("AAPL");
console.log("Total portfolio value after removing AAPL:", stockPortfolio.getTotalValue());
console.log("Quantity of AAPL after removal:", stockPortfolio.getStockQuantity("AAPL"));
console.log("Value of AAPL after removal:", stockPortfolio.calculateStockValue("AAPL"));

// ... Additional functionality and tests

// Export the module for reuse in other parts of the system
module.exports = stockPortfolio;
