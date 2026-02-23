// Dashboard.jsx
import React from "react";

function Dashboard({
  breweries,
  filteredBreweries,
  searchTerm,
  setSearchTerm,
  breweryType,
  setBreweryType,
  cityFilter,
  setCityFilter,
  stateFilter,
  setStateFilter,
  minSize,
  setMinSize,
  maxSize,
  setMaxSize,
  uniqueStates,
  uniqueTypes,
  loading
}) {
  // Calculate summary statistics
  const totalBreweries = breweries.length;
  const microBreweries = breweries.filter(brewery => brewery.brewery_type === "micro").length;
  const brewpubs = breweries.filter(brewery => brewery.brewery_type === "brewpub").length;
  
  // Current time
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <>
      <h1>BrewDash</h1>
      
      {/* Summary Statistics Cards */}
      <div className="summary-cards">
        <div className="card">
          <h2>Brewery Count</h2>
          <p>{totalBreweries} Total</p>
        </div>
        
        <div className="card">
          <h2>{currentTime}</h2>
          <p>Beer O'Clock</p>
        </div>
        
        <div className="card">
          <h2>Top Types</h2>
          <p>🍺 {microBreweries} Micro</p>
          <p>🍻 {brewpubs} Brewpub</p>
        </div>
      </div>
      
      {/* Multiple Filter Section */}
      <div className="filter-section">
        <div className="filter-row">
          {/* Text input filter */}
          <div className="filter-control">
            <label>Brewery Name:</label>
            <input 
              type="text" 
              placeholder="Enter brewery name" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          {/* Dropdown filter */}
          <div className="filter-control">
            <label>Brewery Type:</label>
            <select 
              value={breweryType} 
              onChange={(e) => setBreweryType(e.target.value)}
              className="select-input"
            >
              <option value="">All Types</option>
              {uniqueTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="filter-row">
          {/* Text input filter */}
          <div className="filter-control">
            <label>City:</label>
            <input 
              type="text" 
              placeholder="Enter city" 
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              className="search-input"
            />
          </div>
          
          {/* Dropdown filter */}
          <div className="filter-control">
            <label>State:</label>
            <select 
              value={stateFilter} 
              onChange={(e) => setStateFilter(e.target.value)}
              className="select-input"
            >
              <option value="">All States</option>
              {uniqueStates.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Range slider with specific bounds */}
        <div className="filter-row">
          <div className="filter-control full-width">
            <label>Brewery Size Range:</label>
            <div className="slider-container">
              <input 
                type="number" 
                min="0" 
                max="100000" 
                value={minSize}
                onChange={(e) => setMinSize(parseInt(e.target.value))}
                className="range-input"
              />
              <input 
                type="range" 
                min="0" 
                max="100000" 
                step="5000"
                value={minSize}
                onChange={(e) => setMinSize(parseInt(e.target.value))}
                className="slider"
              />
              <input 
                type="range" 
                min="0" 
                max="100000" 
                step="5000"
                value={maxSize}
                onChange={(e) => setMaxSize(parseInt(e.target.value))}
                className="slider"
              />
              <input 
                type="number" 
                min="0" 
                max="100000" 
                value={maxSize}
                onChange={(e) => setMaxSize(parseInt(e.target.value))}
                className="range-input"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Breweries Table */}
      <div className="breweries-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Location</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="4">Loading...</td></tr>
            ) : filteredBreweries.length === 0 ? (
              <tr><td colSpan="4">No breweries found</td></tr>
            ) : (
              filteredBreweries.map(brewery => (
                <tr key={brewery.id}>
                  <td>{brewery.name}</td>
                  <td>{brewery.brewery_type}</td>
                  <td>{brewery.city}, {brewery.state}</td>
                  <td>
                    {brewery.website_url ? (
                      <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">
                        🌐
                      </a>
                    ) : "N/A"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;
