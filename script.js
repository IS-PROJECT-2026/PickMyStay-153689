/* ---------------------------------------------------------------------- */
/* 1. HOTEL DATASET                                                       */
/* ---------------------------------------------------------------------- */

const hotels = [
  {
    id: 1,
    name: "Safari View Hotel",
    location: "Westlands",
    pricePerNight: 8500,
    rating: 4.7,
    locationScore: 9,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    description: "A polished business hotel in the heart of Westlands, minutes from malls, offices, and Nairobi's best rooftop dining.",
    amenities: ["WiFi", "Pool", "Restaurant", "Gym"]
  },
  {
    id: 2,
    name: "Kilimani Garden Suites",
    location: "Kilimani",
    pricePerNight: 6200,
    rating: 4.3,
    locationScore: 8,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=60",
    description: "Quiet garden suites tucked into leafy Kilimani, popular with long-stay guests and remote workers.",
    amenities: ["WiFi", "Kitchenette", "Parking"]
  },
  {
    id: 3,
    name: "Karen Hillside Lodge",
    location: "Karen",
    pricePerNight: 11500,
    rating: 4.8,
    locationScore: 6,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
    description: "A serene forest-edge lodge in Karen with spacious grounds, ideal for guests who want space over speed.",
    amenities: ["WiFi", "Pool", "Spa", "Garden"]
  },
  {
    id: 4,
    name: "CBD Central Inn",
    location: "CBD",
    pricePerNight: 4200,
    rating: 3.6,
    locationScore: 10,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=60",
    description: "A no-frills, budget-friendly inn right in the CBD — closest option to government offices and the railway station.",
    amenities: ["WiFi", "24hr Reception"]
  },
  {
    id: 5,
    name: "Lavington Boutique Hotel",
    location: "Lavington",
    pricePerNight: 9800,
    rating: 4.5,
    locationScore: 7,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=60",
    description: "A design-forward boutique hotel with a courtyard cafe, favoured by guests who want character over chain-hotel sameness.",
    amenities: ["WiFi", "Restaurant", "Bar", "Parking"]
  },
  {
    id: 6,
    name: "Gigiri Diplomat Residences",
    location: "Gigiri",
    pricePerNight: 14200,
    rating: 4.9,
    locationScore: 5,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=60",
    description: "High-end residences near the UN complex, built for diplomats and executives who prioritise privacy and service.",
    amenities: ["WiFi", "Pool", "Spa", "Gym", "Restaurant"]
  },
  {
    id: 7,
    name: "Parklands Riverside Hotel",
    location: "Parklands",
    pricePerNight: 5600,
    rating: 4.0,
    locationScore: 7,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
    description: "A dependable mid-range hotel along the river, close to Parklands' shops and residential streets.",
    amenities: ["WiFi", "Restaurant", "Parking"]
  },
  {
    id: 8,
    name: "Riverside Executive Suites",
    location: "Riverside",
    pricePerNight: 10300,
    rating: 4.4,
    locationScore: 8,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=60",
    description: "Corporate suites geared toward business travellers, with meeting rooms and fast, reliable WiFi throughout.",
    amenities: ["WiFi", "Meeting Rooms", "Gym", "Restaurant"]
  },
  {
    id: 9,
    name: "Upper Hill Skyline Hotel",
    location: "Upper Hill",
    pricePerNight: 12800,
    rating: 4.6,
    locationScore: 8,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60",
    description: "A glass-tower hotel among Upper Hill's corporate headquarters, with skyline views from every upper floor.",
    amenities: ["WiFi", "Pool", "Gym", "Bar", "Restaurant"]
  },
  {
    id: 10,
    name: "Airport Transit Lodge",
    location: "Airport area",
    pricePerNight: 3800,
    rating: 3.8,
    locationScore: 6,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=60",
    description: "A practical layover lodge minutes from JKIA, built for early flights and late arrivals rather than long stays.",
    amenities: ["WiFi", "Shuttle", "24hr Reception"]
  }
];

/* 7. RENDERING                                                             */
/* ---------------------------------------------------------------------- */
 
/** Renders a ranked, filtered list of hotel cards into the grid. */
function renderHotels(rankedList) {
  hotelGrid.innerHTML = "";
 
  if (rankedList.length === 0) {
    hotelGrid.hidden = true;
    noResults.hidden = false;
    resultsCount.textContent = "";
    return;
  }
 
  hotelGrid.hidden = false;
  noResults.hidden = true;
  resultsCount.textContent = `${rankedList.length} hotel${rankedList.length === 1 ? "" : "s"} ranked to your preferences`;
 
  rankedList.forEach((hotel, index) => {
    const card = document.createElement("article");
    card.className = "hotel-card" + (index === 0 ? " best-match" : "");
    card.dataset.hotelId = hotel.id;
 
    card.innerHTML = `
      ${index === 0 ? '<span class="best-badge">Best Match</span>' : ""}
      
      <img class="hotel-image" src="${hotel.image}" alt="${hotel.name}">
      <div class="hotel-body">
        <div class="hotel-top-row">
          <span class="hotel-name">${hotel.name}</span>
          <span class="match-score">${hotel.matchScore}%</span>
        </div>
        <p class="hotel-location">${hotel.location}</p>
        <div class="hotel-meta">
          <span class="hotel-price">KES ${hotel.pricePerNight.toLocaleString()}/night</span>
          <span class="hotel-rating">★ ${hotel.rating.toFixed(1)}</span>
        </div>
        <div class="hotel-amenities">
          ${hotel.amenities.slice(0, 3).map(a => `<span class="amenity-tag">${a}</span>`).join("")}
        </div>
        <div class="hotel-actions">
          <button class="btn btn-ghost details-btn">View Details</button>
          <button class="btn btn-primary book-btn">Book Now</button>
        </div>
      </div>
    `;
 
    card.querySelector(".details-btn").addEventListener("click", () => openHotelDetails(hotel.id));
    card.querySelector(".book-btn").addEventListener("click", () => openBookingForm(hotel.id));
 
    hotelGrid.appendChild(card);
  });
}