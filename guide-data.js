// =============================================================================
// COZY CONDO AT WATERVILLE ESTATES - GUEST GUIDEBOOK DATA
// =============================================================================
// HOST INSTRUCTIONS:
// You can easily update this file anytime! Just edit the text inside the quotes.
// To add or remove items, simply copy an existing block or delete it.
// =============================================================================

const GUIDE_DATA = {
  // ---------------------------------------------------------------------------
  // GUIDE METADATA & LAST UPDATED
  // ---------------------------------------------------------------------------
  lastUpdated: "November 25, 2026",
  version: "2.1",

  // ---------------------------------------------------------------------------
  // PROPERTY BASICS
  // ---------------------------------------------------------------------------
  property: {
    name: "Cozy Condo at Waterville Estates",
    tagline: "Your White Mountains Retreat & Digital Guest Guidebook",
    address: "7 Laurel Circle, Unit #5, Thornton, NH 03223",
    googleMapsUrl: "https://maps.google.com/?q=7+Laurel+Circle+Thornton+NH+03223",
    checkInTime: "4:00 PM",
    checkOutTime: "10:00 AM",
    rating: "5.0 â˜…",
    specs: "3 Bedrooms â€¢ 6 Beds â€¢ 2 Full Baths â€¢ Up to 7-8 Guests",

    // Website URL used to generate the QR Code on the printable flyer
    // (Update this once you host the site or connect a domain!)
    liveWebsiteUrl: "https://greggmccalla-byte.github.io/CGM/",
    
    wifi: {
      network: "Laurel5",
      password: "Birches2026",
      note: "High-speed internet is available throughout the condo. If you need to reset the router, it is located near the living room entertainment center."
    },

    trash: {
      summary: "Laurel Circle Community Dumpster (Green Bear-Proof Enclosure)",
      instructions: "All household trash must be tied in bags and placed in the designated community dumpster for Laurel Circle / White Birches, located on the left as you exit the front door (look for the bear-proof dumpster). Please ensure the dumpster lid and latch are securely closed after depositing trash.",
      dumpsterLocation: "located on the left as you exit the front door (look for the bear-proof dumpster)."
    },

    arrival: {
      entryTitle: "Keyless / Smart Lock Entry",
      entryInstructions: "Your personal door code is sent via booking message 24 hours before arrival. Enter your code on the front door keypad to unlock.",
      parkingSummary: "2 designated spaces: one directly in front of the walkway and one to the left. Overflow parking is behind the dumpster.",
      parkingNote: "Do not park on roadways or grassy areas, especially during winter snow-plowing."
    },

    // Contact info
    hostContact: {
      name: "Your Host",
      phone: "[PLEASE UPDATE: YOUR PHONE NUMBER]",
      displayPhone: "(603) 555-0123",
      email: "[PLEASE UPDATE: YOUR EMAIL]",
      note: "For non-urgent questions, text messaging is preferred. For emergencies, please call directly or dial 911."
    }
  },

  // ---------------------------------------------------------------------------
  // EMERGENCY & MEDICAL CONTACTS
  // ---------------------------------------------------------------------------
  emergency: [
    {
      title: "Life-Threatening Emergencies",
      name: "Police / Fire / EMS",
      phone: "911",
      note: "Give the dispatcher your address: 7 Laurel Circle, Unit 5, Thornton, NH (Waterville Estates)"
    },
    {
      title: "Nearest 24/7 Hospital & Emergency Room",
      name: "Speare Memorial Hospital",
      phone: "(603) 536-1120",
      address: "16 Hospital Rd, Plymouth, NH 03264",
      distance: "Approx. 14 miles (18 mins drive south on I-93)",
      mapUrl: "https://maps.google.com/?q=Speare+Memorial+Hospital+Plymouth+NH",
      website: "https://spearehospital.com"
    },
    {
      title: "Urgent Care & Walk-in Clinic",
      name: "Speare Memorial Walk-In Clinic",
      phone: "(603) 238-4498",
      address: "Boulder Point, 11 Sandy Lane, Plymouth, NH 03264",
      distance: "Approx. 15 mins drive",
      mapUrl: "https://maps.google.com/?q=Speare+Walk-in+Clinic+Boulder+Point+Plymouth+NH",
      website: "https://spearehospital.com/walk-in-clinic"
    },
    {
      title: "Local Police (Non-Emergency)",
      name: "Thornton Police Department",
      phone: "(603) 726-3871",
      note: "For non-emergency police inquiries or road condition updates"
    },
    {
      title: "Local Fire Department (Non-Emergency)",
      name: "Thornton Fire & Rescue",
      phone: "(603) 726-3300",
      note: "Non-emergency dispatch"
    },
    {
      title: "Poison Control Center",
      name: "Northern New England Poison Center",
      phone: "1-800-222-1222",
      note: "Free, confidential 24/7 hotline"
    }
  ],

  // ---------------------------------------------------------------------------
  // HOUSE RULES & EXPECTATIONS
  // ---------------------------------------------------------------------------
  houseRules: [
    {
      icon: "users",
      title: "Occupancy Limit",
      desc: "Maximum of 7 to 8 registered guests. Only registered guests are allowed on property and permitted into the Waterville Estates Rec Center."
    },
    {
      icon: "volume-x",
      title: "Quiet Hours",
      desc: "10:00 PM to 8:00 AM daily. Please be respectful of neighbors in this peaceful mountain community. Keep deck conversations quiet late at night."
    },
    {
      icon: "ban",
      title: "Strictly No Smoking / Vaping",
      desc: "No smoking, vaping, or burning of candles/incense inside the home or on the decks. A substantial cleaning fee will apply if smoke odor is detected."
    },
    {
      icon: "paw",
      title: "No Pets Allowed",
      desc: "To ensure a hypoallergenic and safe environment for all guests and owners, pets of any kind are strictly prohibited."
    },
    {
      icon: "party-popper-ban",
      title: "No Parties or Events",
      desc: "Parties, large gatherings, bachelor/bachelorette events, and unauthorized visitors are strictly prohibited."
    },
    {
      icon: "parking",
      title: "Parking Rules",
      desc: "Park only in the designated parking area in front of the property.  There are two parking spaces, one in front of the walkway and to the left. Additional parking can be found behind the dumpster. Do not park on roadways or grassy areas, especially during winter snow-plowing operations."
    }
  ],

  // ---------------------------------------------------------------------------
  // WATERVILLE ESTATES COMMUNITY CENTER & GUEST PASSES
  // ---------------------------------------------------------------------------
  recCenter: {
    overview: "Waterville Estates is a premier resort community nestled in the White Mountains. As our guest, you enjoy access to the extensive multimillion-dollar recreation facilities!",
    location: "562 Winterbrook Rd, Campton, NH 03223 (about 3-4 minutes drive down the road)",
    mapUrl: "https://maps.google.com/?q=Waterville+Estates+Community+Center+Campton+NH",
    website: "https://www.waterville-estates.com/our-facilities",
    phone: "(603) 726-3082",
    hours: "Sunâ€“Thu: 10 AM â€“ 8 PM  |  Fri & Sat: 10 AM â€“ 10 PM",
    passInstructions: [
      "ONE guest pass to the Recreation Center is INCLUDED with your stay.",
      "Day passes must be purchased at the front desk for all additional guests in your party.",
      "Per association rules, only up to 7 guests from our condo may be registered for rec center entry at one time.",
      "Children aged 7 and under enter FREE."
    ],
    pricing: [
      {
        category: "Weekend Day Pass (Saturday, Sunday & Holidays)",
        adult: "$20.00 (Ages 18-64)",
        senior: "$10.00 (Ages 65+)",
        child: "$10.00 (Ages 8-17)",
        kidsFree: "Under 8: Free"
      },
      {
        category: "Midweek Day Pass (Monday through Friday)",
        adult: "$10.00 (Ages 18-64)",
        senior: "$5.00 (Ages 65+)",
        child: "$5.00 (Ages 8-17)",
        kidsFree: "Under 8: Free"
      },
      {
        category: "Twilight Pass (Daily after 4:00 PM)",
        adult: "$10.00 per adult",
        senior: "$5.00",
        child: "$5.00 (Ages 8-17)",
        kidsFree: "Under 8: Free"
      }
    ],
    // Hours sourced from waterville-estates.com/our-facilities/recreation-center
    hours: "Sunâ€“Thu: 10 AM â€“ 8 PM  |  Fri & Sat: 10 AM â€“ 10 PM",
    amenities: [
      { name: "2 Indoor Heated Pools", desc: "Open year-round with lounge chairs, large windows, and pool noodles. Perfect for laps or family fun any time of year." },
      { name: "2 Outdoor Heated Pools", desc: "Seasonally open with walk-in steps, sundeck, lounge chairs, shade umbrellas, and tiered wooden decking overlooking forested hills." },
      { name: "Indoor & Outdoor Hot Tubs", desc: "Relax your muscles after a long day of skiing or hiking. Indoor hot tub sits at the end of the lap pool; outdoor tub on the pool deck." },
      { name: "Locker Rooms & Saunas", desc: "Full locker rooms with dry-heat saunas for men and women, available to all rec center guests." },
      { name: "Fitness Center", desc: "Commercial treadmills, stationary bikes, multi-station weight machines, free weights, and wall-mounted workout guides." },
      { name: "Campton Mountain Ski Area", desc: "On-site downhill ski hill with chairlift and rope tow. Night skiing on weekends. Ski lessons available." },
      { name: "Cross-Country Skiing & Snowshoeing", desc: "Miles of groomed and marked trails winding through the community â€” right out the door." },
      { name: "Community Pond, Beach & Fishing", desc: "Sandy swimming beach with a floating diving raft. Catch-and-release fishing on the pond, open to all guests." },
      { name: "Sports Courts", desc: "2 basketball courts, 2 pickleball courts, 3 tennis courts, and a sand volleyball court â€” all lit for evening play." },
      { name: "Game Room & Pub", desc: "Billiards, arcade games, and a relaxed pub serving your favorite beverages â€” great for rainy afternoons." },
      { name: "Playground & Horseshoe Pits", desc: "Outdoor playground with swings for younger kids, plus horseshoe pits for the adults." },
      { name: "Hiking Trails & Nature Walks", desc: "Miles of community hiking trails suitable for all skill levels, connecting to the White Mountain trail network." }
    ],
    photos: [
      {
        url: "https://www.waterville-estates.com/wp-content/uploads/2014/04/pool3.jpg",
        title: "Indoor Heated Pool â€” Lounge",
        caption: "Rectangular indoor pool with chaise lounges and large windows"
      },
      {
        url: "https://www.waterville-estates.com/wp-content/uploads/2014/04/pool1.jpg",
        title: "Indoor Lap Pool & Hot Tub",
        caption: "Heated lap pool with raised indoor whirlpool spa at the far end"
      },
      {
        url: "https://www.waterville-estates.com/wp-content/uploads/2014/04/Pool-2.jpg",
        title: "Outdoor Heated Pool & Sun Deck",
        caption: "Outdoor pool with walk-in steps, lounge chairs, and forested hillside backdrop"
      },
      {
        url: "https://www.waterville-estates.com/wp-content/uploads/Fitness-Center-1.jpg",
        title: "Fitness Center",
        caption: "Weight machines, treadmills, stationary bikes, and free weights"
      },
      {
        url: "https://www.waterville-estates.com/wp-content/uploads/2014/02/DSC08839.jpg",
        title: "Community Pub & Dining",
        caption: "On-site pub serving beverages, pub fare, and special event dining"
      },
      {
        url: "https://www.waterville-estates.com/wp-content/uploads/2014/02/DSC07766-low.jpg",
        title: "Community Center Exterior",
        caption: "Waterville Estates Community Center clubhouse at 562 Winterbrook Rd, Campton"
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // LOCAL DINING & DRINKS
  // ---------------------------------------------------------------------------
  dining: [
    {
      name: "Mad River Coffee House",
      type: "Coffee & Breakfast",
      tag: "Breakfast",
      desc: "Top local favorite! In-house coffee roastery, artisan espresso drinks, breakfast sandwiches, wraps, and freshly baked pastries.",
      address: "389 NH-49, Campton, NH 03223",
      driveTime: "8 mins",
      mapUrl: "https://maps.google.com/?q=Mad+River+Coffee+House+Campton+NH",
      website: "https://madrivercoffeeroasters.com"
    },
    {
      name: "Benton's Sugar Shack",
      type: "Classic Country Breakfast",
      tag: "Breakfast",
      desc: "Iconic Thornton maple sugar shack serving authentic buttermilk pancakes, homemade Belgian waffles, and pure New Hampshire maple syrup.",
      address: "1856 US-3, Thornton, NH 03285",
      driveTime: "10 mins",
      mapUrl: "https://maps.google.com/?q=Benton's+Sugar+Shack+Thornton+NH",
      website: "https://bentonssugarshack.com"
    },
    {
      name: "Sunset Grill",
      type: "Breakfast, Lunch & Dinner",
      tag: "Breakfast",
      desc: "Comfort food classics, hearty breakfast platters, omelets, and weekend brunch in a laid-back, welcoming country diner setting.",
      address: "244 Mayhew Turnpike, Campton, NH 03223",
      driveTime: "9 mins",
      mapUrl: "https://maps.google.com/?q=Sunset+Grill+Campton+NH",
      website: "https://sunsetgrillnh.com"
    },
    {
      name: "White Mountain Bagel Co.",
      type: "Bagels & Quick Bites",
      tag: "Breakfast",
      desc: "Freshly boiled and baked New York-style bagels, creative homemade cream cheese spreads, and breakfast sandwiches for fueling mountain adventures.",
      address: "25 South Mountain Dr, Lincoln, NH 03251",
      driveTime: "18 mins",
      mapUrl: "https://maps.google.com/?q=White+Mountain+Bagel+Co+Lincoln+NH",
      website: "https://white-mountain-bagel-co.placejoys.com/"
    },
    {
      name: "The Mountain Pub (Waterville Estates)",
      type: "Pub & Casual Dining",
      tag: "Dinner",
      desc: "Right on-site at the Waterville Estates Community Center! Enjoy craft beers, burgers, flatbread pizzas, and pub fare without leaving the neighborhood.",
      address: "562 Winterbrook Rd, Campton, NH 03223",
      driveTime: "4 mins",
      mapUrl: "https://maps.google.com/?q=Waterville+Estates+Campton+NH",
      website: "https://www.waterville-estates.com/our-facilities"
    },
    {
      name: "Covered Bridge Farm Table",
      type: "Farm-to-Table American",
      tag: "Dinner",
      desc: "Charming restaurant overlooking the historic Blair Covered Bridge on the Pemigewasset River. Exceptional locally-sourced farm-to-table cuisine.",
      address: "57 Blair Rd, Campton, NH 03223",
      driveTime: "11 mins",
      mapUrl: "https://maps.google.com/?q=Covered+Bridge+Farm+Table+Campton+NH",
      website: "https://coveredbridgefarmtable.com"
    },
    {
      name: "Woodstock Inn Brewery",
      type: "Brewery, Pub & Patio",
      tag: "Dinner",
      desc: "Legendary White Mountains brewery with award-winning house ales, huge indoor seating, outdoor tent dining, live music, and pub classics.",
      address: "135 Main St, North Woodstock, NH 03262",
      driveTime: "20 mins",
      mapUrl: "https://maps.google.com/?q=Woodstock+Inn+Brewery+North+Woodstock+NH",
      website: "https://woodstockinnbrewery.com"
    },
    {
      name: "Black Mtn Burger Bar",
      type: "Gourmet Burgers & Craft Beers",
      tag: "Dinner",
      desc: "Famous for thick specialty burgers (angus, bison, and veggie), hand-cut truffle fries, giant milkshakes, and an extensive rotating craft beer list.",
      address: "264 Main St, Lincoln, NH 03251",
      driveTime: "19 mins",
      mapUrl: "https://maps.google.com/?q=Black+Mtn+Burger+Bar+Lincoln+NH",
      website: "https://blackmtnburger.com"
    },
    {
      name: "The Common Man",
      type: "New England Comfort Food",
      tag: "Dinner",
      desc: "Classic New Hampshire institution. Complimentary cheese and crackers by the stone fireplace, hearty pot roasts, seafood, steaks, and homemade desserts.",
      address: "Main St, Plymouth or Lincoln, NH",
      driveTime: "16 mins",
      mapUrl: "https://maps.google.com/?q=Common+Man+Plymouth+NH",
      website: "https://thecman.com"
    },
    {
      name: "La Vista Italian Cuisine",
      type: "Upscale Italian & Pizza",
      tag: "Dinner",
      desc: "Wood-fired specialty pizzas, fresh pastas, seafood dishes, and fine wines located at RiverWalk Resort in downtown Lincoln.",
      address: "22 South Mountain Dr, Lincoln, NH 03251",
      driveTime: "19 mins",
      mapUrl: "https://maps.google.com/?q=La+Vista+Italian+Cuisine+Lincoln+NH",
      website: "https://lavistaitalian.com"
    },
    {
      name: "Yamas Greek Eatery",
      type: "Authentic Greek & Mediterranean",
      tag: "Dinner",
      desc: "Outstanding authentic Greek cuisine featuring handmade gyros, souvlaki skewers, fresh Greek salads, spanakopita, lamb dishes, and warm pita in downtown Plymouth.",
      address: "61 Main St, Plymouth, NH 03264",
      driveTime: "15 mins",
      mapUrl: "https://maps.google.com/?q=Yamas+Greek+Eatery+Plymouth+NH",
      website: "https://cheersyamas.com/"
    },
    {
      name: "Sub Zero Nitrogen Ice Cream",
      type: "Custom Flash-Frozen Ice Cream",
      tag: "Ice Cream",
      desc: "Fun science experience for kids and adults! Fresh cream flash-frozen in seconds using liquid nitrogen with your choice of endless mix-ins.",
      address: "Main St, Lincoln, NH 03251",
      driveTime: "18 mins",
      mapUrl: "https://maps.google.com/?q=Sub+Zero+Nitrogen+Ice+Cream+Lincoln+NH",
      website: "https://subzeroicecream.com"
    },
    {
      name: "M'nM Scoops",
      type: "Artisan Ice Cream & Treats",
      tag: "Ice Cream",
      desc: "Beloved local ice cream shop serving premium super-premium hard ice cream, soft serve, custom sundaes, milkshakes, and sweet treats in historic downtown Plymouth.",
      address: "67 Main St, Plymouth, NH 03264",
      driveTime: "15 mins",
      mapUrl: "https://maps.google.com/?q=M%27nM+Scoops+Plymouth+NH",
      website: "https://www.mnmscoops.com/"
    }
  ],

  // ---------------------------------------------------------------------------
  // SKI MOUNTAINS & WINTER SPORTS
  // ---------------------------------------------------------------------------
  skiing: [
    {
      name: "Campton Mountain Ski Area",
      type: "On-Site Community Ski Hill",
      driveTime: "4 mins (Inside Waterville Estates)",
      desc: "Waterville Estates' own ski hill! Features a double chairlift, rope tow, night skiing under lights on Friday/Saturday, and a warm summit lodge pub.",
      specs: "Rope Tow & Chairlift â€¢ Night Skiing â€¢ Beginner & Intermediate â€¢ Summit Lodge",
      mapUrl: "https://maps.google.com/?q=Campton+Mountain+Ski+Area+Campton+NH",
      website: "https://www.waterville-estates.com/our-facilities/campton-mountian-ski-area"
    },
    {
      name: "Waterville Valley Resort",
      type: "Full-Service Ski Mountain & Nordic Center",
      driveTime: "18 mins",
      desc: "Surrounded by White Mountain National Forest peaks. Offers 265 skiable acres, 4,000+ ft summit, extensive terrain parks, Nordic ski center, and snow tubing.",
      specs: "265 Acres â€¢ 60+ Trails â€¢ 2,020' Vertical â€¢ Terrain Parks â€¢ Tubing Hill",
      mapUrl: "https://maps.google.com/?q=Waterville+Valley+Resort+NH",
      website: "https://waterville.com"
    },
    {
      name: "Loon Mountain Resort",
      type: "Major Ski Resort (Lincoln, NH)",
      driveTime: "22 mins",
      desc: "One of New England's premier destinations featuring the Kancamagus 8 (high-speed eight-person heated chairlift), gondola, award-winning terrain parks, and great snowmaking.",
      specs: "61 Trails â€¢ 3 Peaks â€¢ 2,100' Vertical â€¢ Heated 8-Pack Lift â€¢ Gondola",
      mapUrl: "https://maps.google.com/?q=Loon+Mountain+Resort+Lincoln+NH",
      website: "https://loonmtn.com"
    },
    {
      name: "Cannon Mountain",
      type: "State Park Ski Mountain (Franconia Notch)",
      driveTime: "26 mins",
      desc: "Historic big-mountain terrain owned by the State of New Hampshire. Highest ski summit in NH, challenging steeps, and home to the iconic Cannon Aerial Tramway.",
      specs: "97 Trails â€¢ 4,080' Summit â€¢ 2,180' Vertical â€¢ Aerial Tramway â€¢ Epic Views",
      mapUrl: "https://maps.google.com/?q=Cannon+Mountain+Franconia+NH",
      website: "https://www.cannonmt.com/"
    },
    {
      name: "Bretton Woods",
      type: "NH's Largest Ski Area (Omni Mount Washington)",
      driveTime: "45 mins",
      desc: "Voted #1 for grooming and snow quality in the East! Scenic views of Mount Washington, 8-passenger Skyway Gondola, wide cruising boulevards, and glades.",
      specs: "468 Acres â€¢ 63 Trails â€¢ 10 Lifts â€¢ 8-Passenger Gondola â€¢ Night Skiing",
      mapUrl: "https://maps.google.com/?q=Bretton+Woods+Ski+Area+NH",
      website: "https://brettonwoods.com"
    }
  ],

  // ---------------------------------------------------------------------------
  // HIKING TRAILS & WALKS
  // ---------------------------------------------------------------------------
  hiking: [
    {
      name: "Waterville Estates On-Site Trail Network",
      difficulty: "Easy to Moderate",
      distance: "6+ Miles of Trails",
      driveTime: "Steps from your door",
      desc: "Scenic, marked woodland trails winding through Waterville Estates. Perfect for a morning jog, leisurely walk, dog-free nature stroll, or winter snowshoeing.",
      mapUrl: "https://maps.google.com/?q=Waterville+Estates+Campton+NH",
      website: "https://www.waterville-estates.com/our-facilities/outdoor-recreation"
    },
    {
      name: "Welch-Dickey Loop Trail",
      difficulty: "Moderate - Strenuous (Ledges)",
      distance: "4.4 Mile Loop â€¢ 1,750' Elevation",
      driveTime: "12 mins (Thornton/Campton)",
      desc: "Ranked among the top hikes in all of New England! Features exposed granite ledges with jaw-dropping 360-degree views of the Mad River Notch.",
      mapUrl: "https://maps.google.com/?q=Welch+Dickey+Trailhead+Thornton+NH",
      website: "https://www.alltrails.com/trail/us/new-hampshire/welch-and-dickey-loop-trail"
    },
    {
      name: "Flume Gorge Trail",
      difficulty: "Easy to Moderate (Boardwalk & Stairs)",
      distance: "2.0 Mile Loop",
      driveTime: "18 mins (Franconia Notch State Park)",
      desc: "Spectacular natural gorge extending 800 feet at the base of Mount Liberty with 90-foot sheer granite walls, roaring waterfalls, and historic covered bridges.",
      mapUrl: "https://maps.google.com/?q=The+Flume+Gorge+Lincoln+NH",
      website: "https://nhstateparks.org/find-parks-trails/flume-gorge"
    },
    {
      name: "Artist's Bluff & Bald Mountain",
      difficulty: "Easy to Moderate",
      distance: "1.5 Mile Loop â€¢ 430' Elevation",
      driveTime: "24 mins (Franconia Notch)",
      desc: "Short family-friendly hike offering the most photographed vista in New Hampshire overlooking Echo Lake and the dramatic Franconia Notch pass.",
      mapUrl: "https://maps.google.com/?q=Artist+Bluff+Trailhead+Franconia+NH",
      website: "https://www.alltrails.com/trail/us/new-hampshire/artist-bluff-trail"
    },
    {
      name: "Mount Pemigewasset (Indian Head)",
      difficulty: "Moderate",
      distance: "3.7 Miles Out & Back â€¢ 1,250' Elevation",
      driveTime: "19 mins (Lincoln)",
      desc: "Gentle switchbacks lead through quiet hardwood forest up to a massive open granite shelf with sweeping panoramic views of Mount Moosilauke and the Kinsmans.",
      mapUrl: "https://maps.google.com/?q=Mount+Pemigewasset+Trailhead+Lincoln+NH",
      website: "https://www.alltrails.com/trail/us/new-hampshire/mount-pemigewasset-trail"
    },
    {
      name: "The Basin & Cascades Trail",
      difficulty: "Easy (Paved / Family Friendly)",
      distance: "1.0 Mile Walk",
      driveTime: "21 mins (Franconia Notch)",
      desc: "A mesmerizing 30-foot granite pothole smoothed over 25,000 years by glacial meltwater. Short paved walk suitable for small children and strollers.",
      mapUrl: "https://maps.google.com/?q=The+Basin+Franconia+Notch+NH",
      website: "https://www.alltrails.com/trail/us/new-hampshire/basin-cascade-trail"
    }
  ],

  // ---------------------------------------------------------------------------
  // FISHING SPOTS (FLY, STREAM & LAKE)
  // ---------------------------------------------------------------------------
  fishing: [
    {
      name: "Mad River (Thornton & Campton)",
      type: "Fly Fishing & Wading (Stream)",
      species: "Brook Trout, Rainbow Trout, Brown Trout",
      driveTime: "6-8 mins",
      desc: "A classic freestone mountain stream running right down the valley into Campton. Excellent pocket water, gravel runs, and deep pools for dry flies and nymphs.",
      tips: "Access points along Route 49. Spring and early summer mornings yield wonderful hatches (caddis, stoneflies, and mayflies).",
      mapUrl: "https://maps.google.com/?q=Mad+River+Campton+NH"
    },
    {
      name: "Pemigewasset River (The Pemi)",
      type: "River Fishing & Float Fishing",
      species: "Rainbow Trout, Brown Trout, Smallmouth Bass",
      driveTime: "8 mins",
      desc: "The primary artery of the western White Mountains. Features wide gravel bars, riffles, and deep runs where cold mountain tributaries join. Renowned for outstanding seasonal fly fishing and wading.",
      tips: "Great wading near the Blair Covered Bridge in Campton or Livermore Falls in Plymouth. See the linked guide for seasonal hatches, recommended fly patterns, and stream conditions.",
      mapUrl: "https://maps.google.com/?q=Blair+Bridge+Campton+NH",
      website: "https://perfectflystore.com/your-streams/fly-fishing-the-pemigewasset-river-new-hampshire/",
      websiteLabel: "Fly Fishing Guide"
    },
    {
      name: "Fretts Brook Guides (Fly Fishing Charters)",
      type: "Guided Drift Boat & Wade Trips",
      species: "Rainbow Trout, Brown Trout, Smallmouth Bass",
      driveTime: "Local Guide Service",
      desc: "Licensed New Hampshire fly fishing guide service specializing in drift boat float trips and walk-and-wade outings on the Pemigewasset River and White Mountains waters. Top-tier rods, reels, flies, and gear provided for all experience levels.",
      tips: "Advance booking is recommended for spring caddis hatches and prime autumn foliage float trips. Half-day and full-day charters available.",
      website: "https://www.frettsbrookguides.com/charters",
      websiteLabel: "Book Charters & Rates"
    },
    {
      name: "Waterville Estates Community Pond",
      type: "Lake / Shoreline Fishing (Family)",
      species: "Bass, Perch, Sunfish",
      driveTime: "3 mins (On-Site)",
      desc: "Private community pond with a sandy shoreline and quiet waters. Safe and convenient for kids casting bobbers and worms, or relaxing in a kayak.",
      tips: "Catch-and-release is encouraged to maintain healthy community fish stock for young anglers.",
      mapUrl: "https://maps.google.com/?q=Waterville+Estates+Campton+NH"
    },
    {
      name: "Corcoran's Pond (Waterville Valley)",
      type: "Town Pond Fishing",
      species: "Trout (Stocked by NH Fish & Game)",
      driveTime: "18 mins (Town Square)",
      desc: "Located right in the center of Waterville Valley Town Square. Annually stocked with trout, complete with boat rentals, walking perimeter, and mountain views.",
      tips: "Great for an afternoon family excursion followed by ice cream in Town Square.",
      mapUrl: "https://maps.google.com/?q=Corcoran+Pond+Waterville+Valley+NH"
    },
    {
      name: "NH Fishing License & Regulations (Online)",
      type: "State Licensing Info",
      species: "Official NH Fish & Game",
      driveTime: "Online",
      desc: "Anyone aged 16 and older requires a valid New Hampshire fishing license to fish on public waters. Purchase single-day, 3-day, or season passes online instantly.",
      website: "https://www.wildlife.state.nh.us/licensing/",
      tips: "Licenses can be saved directly on your smartphone as a PDF."
    }
  ],

  // ---------------------------------------------------------------------------
  // LOCAL EVENTS & HAPPENINGS CALENDARS
  // ---------------------------------------------------------------------------
  events: [
    {
      name: "Waterville Estates Community Happenings",
      category: "On-Site / Resort",
      driveTime: "3â€“4 mins",
      desc: "Weekly happenings right at the Community Center & Mountain Pub! Live acoustic music, trivia nights, adult pool volleyball, holiday craft events, and seasonal community socials.",
      tags: ["Live Music", "Mountain Pub", "Family Bingo", "Community"],
      website: "https://www.waterville-estates.com/happenings/event"
    },
    {
      name: "Waterville Valley Resort Event Calendar",
      category: "Valley & Town Square",
      driveTime: "12 mins",
      desc: "Year-round festivities in Waterville Valley! Open-air summer concerts at Town Square gazebo, seasonal parades, winter fireworks displays, ice-skating shows, and ski mountain events.",
      tags: ["Town Square", "Outdoor Concerts", "Fireworks", "Festivals"],
      website: "https://www.waterville.com/event-calendar"
    },
    {
      name: "Central NH Chamber of Commerce Calendar",
      category: "Campton, Thornton & Plymouth",
      driveTime: "5â€“15 mins",
      desc: "Comprehensive community calendar for the Pemi-Baker valley towns. Discover regional craft fairs, farmers markets, business networking, holiday strolls, and cultural events.",
      tags: ["Farmers Markets", "Craft Fairs", "Town Festivals", "Pemi Valley"],
      website: "https://centralnh.org/calendar/?v=bc74609e35bc"
    },
    {
      name: "LocalNH Lincoln & Woodstock Events",
      category: "Lincoln & Woodstock",
      driveTime: "15â€“18 mins",
      desc: "Hyper-local entertainment guide for Lincoln and North Woodstock. Weekly live music lineups, brewery trivia, restaurant specials, comedy nights, and weekend community gatherings.",
      tags: ["Nightlife", "Live Music", "Brewery Events", "Local Happenings"],
      website: "https://localnh.com/towns/lincoln/events"
    },
    {
      name: "Visit White Mountains Master Events Calendar",
      category: "Regional White Mountains",
      driveTime: "Regional",
      desc: "The official White Mountains regional guide for major annual attractions: fall foliage festivals, holiday lighting celebrations, artisan craft fairs, and scenic train events.",
      tags: ["Regional Festivals", "Fall Foliage", "Artisan Fairs", "Family Fun"],
      website: "https://www.visitwhitemountains.com/events/"
    },
    {
      name: "Western White Mountains Chamber of Commerce",
      category: "Lincoln, Woodstock & Franconia",
      driveTime: "15â€“20 mins",
      desc: "Official calendar for the Western White Mountains region. Features the annual Rubber Duck Regatta, Oktoberfest celebrations, Easter egg hunts, and winter holiday parades.",
      tags: ["Oktoberfest", "Community Parades", "Holiday Events", "Chamber Events"],
      website: "https://westernwhitemtns.com/events/"
    },
    {
      name: "The Flying Monkey Movie House & Performance Center",
      category: "Live Music & Theater (Plymouth)",
      driveTime: "15 mins",
      desc: "Premier historic 450-seat theater in downtown Plymouth. Features nationally touring rock & folk artists, stand-up comedy, film screenings, and dinner theater seating.",
      tags: ["Concerts", "Stand-Up Comedy", "Live Theater", "Downtown Plymouth"],
      website: "https://flyingmonkeynh.com/"
    },
    {
      name: "Loon Mountain Resort Events",
      category: "Mountain & Winter Sports",
      driveTime: "20 mins",
      desc: "Major alpine sports events, winter rail jams, aprÃ©s-ski deck entertainment, torchlight parades, and summer mountain bike festivals at Loon Mountain.",
      tags: ["AprÃ©s-Ski", "Snowboard Comps", "Torchlight Parade", "Mountain Festivals"],
      website: "https://www.loonmtn.com/events"
    }
  ],

  // ---------------------------------------------------------------------------
  // LOCAL ATTRACTIONS & FAMILY ADVENTURES
  // ---------------------------------------------------------------------------
  attractions: [
    {
      name: "Clark's Bears & Railroad",
      type: "Family Theme Park & Trained Bears",
      driveTime: "20 mins (Lincoln)",
      desc: "Beloved New Hampshire landmark since 1928! Features world-famous trained black bear shows, 1920s steam train ride through the woods, the notorious Wolfman, and acrobats.",
      mapUrl: "https://maps.google.com/?q=Clark's+Bears+Lincoln+NH",
      website: "https://clarksbears.com"
    },
    {
      name: "Polar Caves Park",
      type: "Glacial Caves & Nature Trail",
      driveTime: "25 mins (Rumney)",
      desc: "Formed over 50,000 years ago during the Ice Age. Self-guided exploration through 9 granite glacial caves, animal park with fallow deer, gemstone mining, and nature boardwalks.",
      mapUrl: "https://maps.google.com/?q=Polar+Caves+Park+Rumney+NH",
      website: "https://polarcaves.com"
    },
    {
      name: "Franconia Notch State Park & Cannon Tramway",
      type: "State Park & 80-Passenger Aerial Tram",
      driveTime: "24 mins (Franconia)",
      desc: "Ride North America's first aerial tramway to the 4,080-foot summit of Cannon Mountain. On clear days you can view 4 states and Canada! Also explore Echo Lake beach and boat rentals.",
      mapUrl: "https://maps.google.com/?q=Cannon+Mountain+Aerial+Tramway+Franconia+NH",
      website: "https://www.cannonmt.com/attractions/aerial-tramway"
    },
    {
      name: "Whale's Tale Water Park",
      type: "Water Park (Summer)",
      driveTime: "22 mins (Lincoln)",
      desc: "Voted one of the best family water parks in the country! Wave pool, lazy river, speed slides, water coasters, and kid splash zones set against mountain scenery.",
      mapUrl: "https://maps.google.com/?q=Whale's+Tale+Waterpark+Lincoln+NH",
      website: "https://whalestalewaterpark.net"
    },
    {
      name: "Funspot (Weirs Beach / Laconia)",
      type: "World's Largest Arcade & Indoor Fun",
      driveTime: "40 mins (Laconia)",
      desc: "Certified by Guinness World Records as the Largest Arcade in the World! Over 600 classic arcade and pinball games, 20-lane candlepin bowling, indoor mini-golf, and tavern.",
      mapUrl: "https://maps.google.com/?q=Funspot+Laconia+NH",
      website: "https://funspotnh.com"
    },
    {
      name: "The Flying Monkey Movie House & Performance Center",
      type: "Historic Theater & Concert Venue",
      driveTime: "16 mins (Downtown Plymouth)",
      desc: "Restored 1920s cinema in college-town Plymouth offering live national music acts, comedy shows, indie movies, dining at your theater seat, and craft beer.",
      mapUrl: "https://maps.google.com/?q=The+Flying+Monkey+Plymouth+NH",
      website: "https://flyingmonkeynh.com"
    }
  ],

  // ---------------------------------------------------------------------------
  // GROCERIES, PHARMACIES & ESSENTIALS
  // ---------------------------------------------------------------------------
  essentials: [
    {
      name: "Market Basket (Plymouth)",
      type: "Supermarket & Groceries",
      driveTime: "14 mins",
      address: "34 Ridgeview Rd, Plymouth, NH 03264 (Off I-93 Exit 26)",
      desc: "Massive, highly popular New England supermarket known for exceptional prices ('More for Your Dollar'), full deli, fresh bakery, butcher shop, and huge grocery selection.",
      mapUrl: "https://maps.google.com/?q=Market+Basket+Plymouth+NH",
      website: "https://www.shopmarketbasket.com"
    },
    {
      name: "Hannaford Supermarket (Plymouth)",
      type: "Full Grocery & Pharmacy",
      driveTime: "14 mins",
      address: "240 Highland St, Plymouth, NH 03264",
      desc: "Large full-service supermarket with full produce, bakery, deli, butcher, seafood counter, beer/wine, and pharmacy.",
      mapUrl: "https://maps.google.com/?q=Hannaford+Supermarket+Plymouth+NH",
      website: "https://hannaford.com"
    },
    {
      name: "NH Liquor & Wine Outlet (Exit 27)",
      type: "State Tax-Free Spirits & Wine",
      driveTime: "10 mins",
      address: "Off I-93 Exit 27, Blair Rd, Campton, NH",
      desc: "New Hampshire state store offering tax-free prices on premium spirits, craft cordials, and thousands of wines. (Note: In NH, liquor and wine are sold exclusively at State Outlets).",
      mapUrl: "https://maps.google.com/?q=NH+Liquor+Outlet+Exit+27+Campton+NH",
      website: "https://liquorandwineoutlets.com"
    },
    {
      name: "Campton Mobil / Circle K (Exit 28)",
      type: "Gas, Firewood, Ice & Quick Snacks",
      driveTime: "7 mins",
      address: "Intersection of Route 49 & US-3, Campton, NH",
      desc: "Closest 24-hour gas station, ATM, bundles of certified firewood for the fireplace, bagged ice, snacks, and morning coffee.",
      mapUrl: "https://maps.google.com/?q=Mobil+Exit+28+Campton+NH"
    },
    {
      name: "CVS Pharmacy (Plymouth)",
      type: "Pharmacy & Personal Essentials",
      driveTime: "15 mins",
      address: "135 Main St, Plymouth, NH 03264",
      desc: "Full pharmacy for prescriptions, over-the-counter medicine, first aid, sunscreen, and toiletries.",
      mapUrl: "https://maps.google.com/?q=CVS+Pharmacy+Plymouth+NH"
    }
  ],

  // ---------------------------------------------------------------------------
  // CONDO APPLIANCES & COMFORT GUIDE
  // ---------------------------------------------------------------------------
  appliances: [
    {
      title: "Indoor Fireplace",
      icon: "flame",
      steps: [
        "Check that the chimney flue/damper is OPEN before lighting any fire.",
        "Use seasoned firewood or clean-burning logs (available at Campton Mobil off Exit 28).",
        "Never use chemical accelerants, lighter fluid, or burn wrapping paper/trash.",
        "Keep the spark screen or glass door closed while the fire is burning.",
        "Ensure ashes and embers are completely extinguished before sleeping or departing."
      ]
    },
    {
      title: "Heating, Thermostats & A/C",
      icon: "thermometer",
      steps: [
        "In winter, keep thermostats set comfortably between 68Â°F and 71Â°F.",
        "When checking out in winter, please set thermostats to 55Â°F (never turn heat off completely to prevent frozen pipes).",
        "In summer, utilize ceiling fans and A/C units for cooling. Please turn off A/C when leaving for the day."
      ]
    },
    {
      title: "Roku Streaming TV (Main Floor)",
      icon: "tv",
      steps: [
        "The main floor living room features a Roku streaming device for all your television and movie entertainment.",
        "Turn on the TV and adjust volume using the Roku remote (power and volume buttons on the remote operate the TV).",
        "If you don't see the Roku home screen immediately, make sure the TV input is set to HDMI 1 (Roku).",
        "Roku Guest Mode is active: select your check-out date to log in securely to Netflix, Prime Video, Hulu, Disney+, Max, Apple TV, YouTube, or Paramount+.",
        "Automatic Account Protection: When your check-out date arrives at 10:00 AM, Roku automatically signs out and deletes your login information.",
        "Free Live TV: Enjoy hundreds of free live TV channels and on-demand movies directly on 'The Roku Channel' without needing any sign-in."
      ]
    },
    {
      title: "Washer & Dryer",
      icon: "washing-machine",
      steps: [
        "In-unit laundry is located in the laundry closet.",
        "Detergent pods/liquid are provided on the shelf above the washer.",
        "Please clean the dryer lint screen after each load to maintain efficiency and safety."
      ]
    },
    {
      title: "Kitchen & Dishwasher",
      icon: "utensils",
      steps: [
        "Dishwasher detergent tabs are located under the kitchen sink.",
        "Please scrape large food scraps into the trash before loading dishes.",
        "Coffee maker: We provide a standard drip coffee maker and starter filters."
      ]
    }
  ],

  // ---------------------------------------------------------------------------
  // CHECK-OUT CHECKLIST (10:00 AM)
  // ---------------------------------------------------------------------------
  checkOutChecklist: [
    { text: "Load and start the dishwasher (detergent tabs under the sink).", done: false },
    { text: "Take all tied garbage and recycling to the community dumpster. Located on the left as you exit the front door (look for the bear-proof dumpster).", done: false },
    { text: "Strip used bed sheets and leave them on top of each bed.", done: false },
    { text: "Place used towels on the bathroom floor or in the laundry hamper.", done: false },
    { text: "Set winter thermostats to 55Â°F (or turn off A/C in summer).", done: false },
    { text: "Check all drawers, under beds, and outlets for phone chargers and personal items.", done: false },
    { text: "Turn off all lights, close and lock all windows and exterior doors.", done: false }
  ],

  // ---------------------------------------------------------------------------
  // LISTING PHOTOS
  // ---------------------------------------------------------------------------
  photos: [
    { url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1774853304665030782/original/d7bf4dbd-1899-42c4-b6ce-0ba61664161e.jpeg", caption: "Cozy Living Room with Fireplace" },
    { url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1774853304665030782/original/cc66d269-b864-46c3-9756-4db11a97b93c.jpeg", caption: "Dining Area & Open Living Space" },
    { url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1774853304665030782/original/e4b15daa-95e9-4edc-94a3-95bfb678a00d.jpeg", caption: "Fully Equipped Kitchen" },
    { url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1774853304665030782/original/1579c216-ba60-4493-a786-889ea341f58c.jpeg", caption: "Bedroom 1 - King Bed" },
    { url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1774853304665030782/original/bbc6badb-8d7f-4b38-9192-387c4ad1632e.jpeg", caption: "Bedroom 2 - Queen Bed" },
    { url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1774853304665030782/original/c2f5be09-b63b-477e-9b37-9cbb2a70304e.jpeg", caption: "Bedroom 3 - Bunk Beds (Sleeps 4)" },
    { url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1774853304665030782/original/4f0e8a18-8212-4788-9629-9e8b870fed76.jpeg", caption: "Full Bathroom 1" },
    { url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1774853304665030782/original/b1f799bc-a6ae-4343-8010-99ead49ec424.jpeg", caption: "Full Bathroom 2" },
    { url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1774853304665030782/original/9dd08a32-0447-49aa-a4f0-fe27075d83bf.jpeg", caption: "Private Deck & Mountain Air" },
    { url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1774853304665030782/original/9e258ffe-6db6-4be5-865e-4d73ee758f3b.jpeg", caption: "Living Room Seating & Board Games" },
    { url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1774853304665030782/original/05a797f7-625b-4116-bfa7-e1f69b22ab82.jpeg", caption: "Kitchen View & Appliances" },
    { url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1774853304665030782/original/bcba4e63-9194-4ff4-8d12-966dc3a9955f.jpeg", caption: "Comfortable Bedroom Retreat" },
    { url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1774853304665030782/original/d418e090-d591-474f-b655-69e97a3ae827.jpeg", caption: "In-Unit Washer & Dryer" },
    { url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1774853304665030782/original/9d736e53-b874-4155-9bca-c7f3d5c7f3dd.jpeg", caption: "Exterior & Scenic Surroundings" },
    { url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1774853304665030782/original/23310230-fbc1-4a79-a554-365b1537d2f9.jpeg", caption: "Waterville Estates Exterior View" },
    { url: "https://d3w216np43fnr4.cloudfront.net/6103/73057/9.jpg?version=1508355128", caption: "Waterville Estates Rec Center Heated Pools & Patio" },
    { url: "https://d3w216np43fnr4.cloudfront.net/1920x1080/6103/73057/12.jpg?version=1528201232", caption: "Waterville Estates Community Center Clubhouse" },
    { url: "https://d3w216np43fnr4.cloudfront.net/6103/73057/8.jpg?version=1508355128", caption: "Campton Mountain Ski Area & Fireside Summit Lounge" },
    { url: "https://d3w216np43fnr4.cloudfront.net/6103/73057/7.jpg?version=1508355127", caption: "Waterville Estates Recreation Pond & Beach" }
  ]
};

