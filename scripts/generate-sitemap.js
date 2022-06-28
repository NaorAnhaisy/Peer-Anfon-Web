const sitemap = require('nextjs-sitemap-generator');
const path = require('path');

/**
 * Generate sitemap.xml
 * * Important: After adding new web page, you need to add the English name
 * * of the page to the 'ignoredPaths' array, and the Hebrew name to the
 * * 'extraPaths' array.
 */
sitemap({
    baseUrl: "https://www.peer-anfon-group.co.il",
    pagesDirectory: path.resolve(__dirname, '../pages'),
    targetDirectory: path.resolve(__dirname, '../public'),
    ignoredExtensions: ["js", "css", "png", "jpeg", "xml", "icon", "json", "map", "ico"],
    nextConfigPath: path.join(__dirname, '../next.config.js'),
    ignoredPaths: [
        "404",
        "index",
        "/automatic-doors",
        "/automatic-doors/collapse-door",
        "/automatic-doors/inside-door",
        "/automatic-doors/telescop-door",
        "/automatic-doors/double-leaf-door",
        "/automatic-doors/single-leaf-door",
        "/mailbox",
        "/mailbox/shared-houses",
        "/mailbox/deposit-cellphones",
        "/mailbox/organizations",
        "/mailbox/private-houses",
        "/mailbox/mailbox-rooms",
        "/enter-doors",
        "/intercom",
        "/contact-us",
        "/quick-enter-gates",
        "/quick-enter-gates/speed-gates",
        "/quick-enter-gates/tripod-turnstiles",
        "/about-us",
        "/recommendations",
        "/articles",
        "/articles/[articleID]",
        "/projects",
        "/projects/[projectID]",
        "/gallery",
        "/new-products"
    ],
    extraPaths: [
        "/",
        "/דלתות-אוטומטיות",
        "/דלתות-אוטומטיות/דלת-אוטומטית-קורסת",
        "/דלתות-אוטומטיות/דלת-פנים-אוטומטית",
        "/דלתות-אוטומטיות/דלת-אוטומטית-טלסקופית",
        "/דלתות-אוטומטיות/דלת-אוטומטית-הזזה-דו-כנף",
        "/דלתות-אוטומטיות/דלת-אוטומטית-הזזה-חד-כנף",
        "/תיבות-דואר",
        "/תיבות-דואר/תיבות-דואר-לבתים-משותפים",
        "/תיבות-דואר/תיבות-דואר-למוסדות",
        "/תיבות-דואר/תיבות-דואר-לבתים-פרטיים",
        "/תיבות-דואר/חדרי-תיבות-דואר",
        "/תיבות-דואר/ארון-הפקדה-לטלפונים-סלולריים",
        "/דלתות-כניסה",
        "/מערכות-אינטרקום",
        "/צור-קשר",
        "/מעברי-כניסה",
        "/מערכות-אינטרקום",
        "/מעברי-כניסה/מעברים-מהירים",
        "/מעברי-כניסה/קרוסלות-חצובה",
        "/אודותינו",
        "/המלצות",
        "/מאמרים",
        "/פרוייקטים",
        "/גלריית-תמונות",
        "/מוצרים-חדשים"
    ]
})