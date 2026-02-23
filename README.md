# BrewDash
# Web Development Project 5 - BrewDash

Submitted by: **Hotragn Pettugani**

This web app: **BrewDash is a comprehensive brewery dashboard that allows users to explore and discover breweries across the United States. It fetches data from the Open Brewery DB API and provides a visually appealing dashboard with search functionality, category filtering, and summary statistics.**

Time spent: **6 hours** spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The site has a dashboard displaying a list of data fetched using an API call**
  - The dashboard displays at least 10 unique items, one per row.
  - Each row includes at least two features (e.g., name, type, city, state).
- [x] **`useEffect` React hook and `async`/`await` are used**
- [x] **The app dashboard includes at least three summary statistics about the data** 
  - Total number of breweries.
  - Number of microbreweries.
  - Number of brewpubs.
- [x] **A search bar allows the user to search for an item in the fetched data**
  - The search bar **correctly** filters items in the list, only displaying items matching the search query.
  - The list of results dynamically updates as the user types into the search bar.
- [x] **An additional filter allows the user to restrict displayed items by specified categories**
  - The filter restricts items in the list using a **different attribute** than the search bar (e.g., brewery type or state).
  - The filter **correctly** filters items in the list, only displaying items matching the filter attribute in the dashboard.
  - The dashboard list dynamically updates as the user adjusts the filter

## Optional Features

The following **optional** features are implemented:

- [x] Multiple filters can be applied simultaneously
- [x] Filters use different input types
  - Text input for name and city.
  - Dropdown for type and state.
  - Slider for size range (using postal code length as a proxy).
- [x] The user can enter specific bounds for filter values

## Additional Features

The following **additional** features are implemented:

- [x] Sidebar navigation with functional links:
  - "Dashboard" for the main view
  - "Search" for advanced filtering
  - "About" section explaining the app
- [x] Brewery-themed background and dark mode styling
- [x] Responsive design for both desktop and mobile views

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://raw.githubusercontent.com/Hotragn/AstroDash--Data-Dashboard-Part-1/main/recording-demo.gif' title='Video Walkthrough' alt='Video Walkthrough' />

GIF created

## Notes

### Challenges Encountered:
- Managing multiple dynamic filters with React state
- Ensuring responsive design across devices

### Solutions:
- Used `useEffect` to track filter changes
- Applied Material UI components and media queries for layout

## License

    Copyright 2025 Hotragn Pettugani

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
