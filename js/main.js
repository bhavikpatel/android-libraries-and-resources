var $itemsElement;
var tags = ["Network", "Internet", "Database", "ORM", "Dependency", "Injection", "Image", "Animation", "Fragment", "Action Bar", "REST", "API", "Asynchronous", "Task", "View", "Scroll", "Picker", "Adapter View", "Graph", "Sample App", "Tool", "Cache", "Test", "Widget"];
var items = [
	{
		"title": "Android Asynchronous Http Client",
		"tags": ["network", "internet", "asynchronous"],
		"author": "James Smith",
		"description": "An asynchronous callback-based Http client for Android built on top of Apache’s HttpClient libraries. All requests are made outside of your app’s main UI thread, but any callback logic will be executed on the same thread as the callback was created using Android’s Handler message passing. You can also use it in Service or background thread, library will automatically recognize in which context is ran.",
		"home_url": "http://loopj.com/android-async-http/",
		"github_url": "https://github.com/loopj/android-async-http/"
	},
	{
		"title": "Volley",
		"tags": ["network", "internet", "API", "asynchronous", "cache"],
		"author": "Google",
		"description": "Volley is an HTTP library that makes networking for Android apps easier and most importantly, faster. Volley is available through the open AOSP repository.",
		"home_url": "http://developer.android.com/training/volley/index.html",
		"google_url": "https://android.googlesource.com/platform/frameworks/volley"
	},
	{
		"title": "Picasso",
		"tags": ["network", "internet", "image", "asynchronous", "cache"],
		"author": "Square",
		"description": "A powerful image downloading and caching library for Android. Images add much-needed context and visual flair to Android applications. Picasso allows for hassle-free image loading in your application—often in one line of code!",
		"home_url": "http://square.github.io/picasso/",
		"github_url": "https://github.com/square/picasso"
	},
	{
		"title": "Glide",
		"tags": ["network", "internet", "image", "asynchronous"],
		"author": "Bump Technologies",
		"description": "An image loading and caching library for Android focused on smooth scrolling",
		"github_url": "https://github.com/bumptech/glide"
	},
	{
		"title": "Retrofit",
		"tags": ["network", "internet", "rest", "api"],
		"author": "Square",
		"description": "A type-safe REST client for Android and Java",
		"home_url": "http://square.github.io/retrofit/",
		"github_url": "https://github.com/square/retrofit"
	},
	{
		"title": "OkHttp",
		"tags": ["network", "internet", "asynchronous"],
		"author": "Square",
		"description": "An HTTP & SPDY client for Android and Java applications. HTTP is the way modern applications network. It’s how we exchange data & media. Doing HTTP efficiently makes your stuff load faster and saves bandwidth.",
		"home_url": "http://square.github.io/okhttp/",
		"github_url": "https://github.com/square/okhttp"
	},
	{
		"title": "RoboSpice",
		"tags": ["network", "internet", "asynchronous", "task", "rest"],
		"author": "Stéphane Nicolas",
		"description": "RoboSpice is a modular android library that makes writing asynchronous long running tasks easy. It is specialized in network requests, supports caching and offers REST requests out-of-the box using extension modules.",
		"home_url": "",
		"github_url": "https://github.com/stephanenicolas/robospice"
	},
	{
		"title": "Ion",
		"tags": ["network", "internet", "asynchronous"],
		"author": "Koushik Dutta",
		"description": "Android Asynchronous Networking and Image Loading",
		"home_url": "",
		"github_url": "https://github.com/koush/ion"
	},
	{
		"title": "Sugar ORM",
		"tags": ["database", "orm"],
		"author": "Satya Narayan",
		"description": "Insanely easy way to work with Android Databases.",
		"home_url": "http://satyan.github.io/sugar/",
		"github_url": "https://github.com/satyan/sugar"
	},
	{
		"title": "greenDAO",
		"tags": ["database", "orm"],
		"author": "greenrobot",
		"description": "greenDAO is a light & fast ORM solution for Android that maps objects to SQLite databases. Being highly optimized for Android, greenDAO offers great performance and consumes minimal memory.",
		"home_url": "http://greendao-orm.com/",
		"github_url": "https://github.com/greenrobot/greenDAO"
	},
	{
		"title": "Sprinkles",
		"tags": ["database", "orm"],
		"author": "Emil Sjölander",
		"description": "Sprinkles is a boiler-plate-reduction-library for dealing with databases in android applications. Some would call it a kind of ORM but I don't see it that way. Sprinkles lets SQL do what it is good at, making complex queries. SQL however is a mess (in my opinion) when is comes to everything else. This is why sprinkles helps you with things such as inserting, updating, and destroying models. Sprinkles will also help you with the tedious task of unpacking a cursor into a model.",
		"github_url": "https://github.com/emilsjolander/sprinkles"
	},
	{
		"title": "ActiveAndroid",
		"tags": ["database", "orm"],
		"author": "Michael Pardo",
		"description": "ActiveAndroid is an active record style ORM (object relational mapper). What does that mean exactly? Well, ActiveAndroid allows you to save and retrieve SQLite database records without ever writing a single SQL statement. Each database record is wrapped neatly into a class with methods like save() and delete().",
		"home_url": "http://www.activeandroid.com",
		"github_url": "https://github.com/pardom/ActiveAndroid"
	},
	{
		"title": "OrmLite",
		"tags": ["database", "orm"],
		"author": "Gray",
		"description": "Object Relational Mapping Lite (ORM Lite) provides some simple, lightweight functionality for persisting Java objects to SQL databases while avoiding the complexity and overhead of more standard ORM packages.",
		"home_url": "http://ormlite.com/",
		"github_url": "https://github.com/j256/ormlite-android"
	},
	{
		"title": "SQLiteAssetHelper",
		"tags": ["database"],
		"author": "Jeff Gilfelt",
		"description": "An Android helper class to manage database creation and version management using an application's raw asset files.",
		"home_url": "http://jgilfelt.github.io/android-sqlite-asset-helper/",
		"github_url": "http://github.com/jgilfelt/android-sqlite-asset-helper"
	},
	{
		"title": "storm-gen",
		"tags": ["database", "orm"],
		"author": "David Chandler",
		"description": "Simple ORM for Android SQLite",
		"github_url": "https://github.com/turbomanage/storm-gen",
		"google_url": "https://code.google.com/p/storm-gen"
	},
	{
		"title": "Dagger",
		"tags": ["dependency", "injection"],
		"author": "Square",
		"description": "A fast dependency injector for Android and Java.",
		"home_url": "http://square.github.io/dagger",
		"github_url": "https://github.com/square/dagger"
	},
	{
		"title": "Butterknife",
		"tags": ["dependency", "injection", "view"],
		"author": "Jake Wharton",
		"description": "View 'injection' library for Android which uses annotation processing to generate boilerplate code for you.",
		"home_url": "http://jakewharton.github.io/butterknife/",
		"github_url": "https://github.com/JakeWharton/butterknife"
	},
	{
		"title": "AndroidAnnotations",
		"tags": ["dependency", "injection"],
		"author": "excilys",
		"description": "AndroidAnnotations is an Open Source framework that speeds up Android development. It takes care of the plumbing, and lets you concentrate on what's really important. By simplifying your code, it facilitates its maintenance.",
		"home_url": "http://androidannotations.org",
		"github_url": "https://github.com/excilys/androidannotations"
	},
	{
		"title": "Android View Animations",
		"tags": ["animation", "view"],
		"author": "Daimajia",
		"description": "Cute view animation collection.",
		"github_url": "https://github.com/daimajia/AndroidViewAnimations"
	},
	{
		"title": "Rebound",
		"tags": ["animation"],
		"author": "Facebook",
		"description": "Rebound is a Java library that models spring dynamics. Rebound spring models can be used to create animations that feel natural by introducing real world physics to your application.",
		"home_url": "http://facebook.github.io/rebound",
		"github_url": "https://github.com/facebook/rebound"
	},
	{
		"title": "Nine Old Androids",
		"tags": ["animation", "compat"],
		"author": "Jake Wharton",
		"description": "Android library for using the Honeycomb (Android 3.0) animation API on all versions of the platform back to 1.0!<br><br>Animation prior to Honeycomb was very limited in what it could accomplish so in Android 3.x a new API was written. With only a change in imports, we are able to use a large subset of the new-style animation with exactly the same API.<br><br>This library also includes support for animating rotation, translation, alpha, and scale on platforms prior to Honeycomb!",
		"home_url": "http://nineoldandroids.com/",
		"github_url": "https://github.com/JakeWharton/NineOldAndroids"
	},
	{
		"title": "Refresh Menu Item",
		"tags": ["animation", "action bar"],
		"author": "Nicolas Jafelle",
		"description": "RefreshMenuItem is a Menu item that shows an indeterminate progress in the Android ActionBar. It is simple to use, lightweight, scalable and uses intuitive methods names.",
		"github_url": "https://github.com/nicolasjafelle/RefreshMenuItem"
	},
	{
		"title": "FragmentTransactionExtended",
		"tags": ["animation", "fragment"],
		"author": "Antonio Corrales",
		"description": "FragmentTransactionExtended is a library which provide us a set of custom animations between fragments.",
		"github_url": "https://github.com/DesarrolloAntonio/FragmentTransactionExtended"
	},
	{
		"title": "PagingListView",
		"tags": ["view", "adapter view"],
		"author": "Nicolas Jafelle",
		"description": "PagingListView is a ListView with the ability to add more items on it when reaches the end of the list.",
		"github_url": "https://github.com/nicolasjafelle/PagingListView"
	},
	{
		"title": "PagingGridView",
		"tags": ["view", "adapter view"],
		"author": "Nicolas Jafelle",
		"description": "PagingGridView has the ability to add more items on it like PagingListView does. Basically is a GridView with the ability to add more items on it when reaches the end of the list.",
		"github_url": "https://github.com/nicolasjafelle/PagingGridView"
	},
	{
		"title": "SizeAdjustingTextView",
		"tags": ["view"],
		"author": "Elliott Chenger",
		"description": "This is based on an open source autosizing textview for Android I found a few weeks ago. The initial approach didn't resize multiple lines and wasn't maintained to keep up with changes in Android. I decided to go ahead and create this as a place to preserve the auto sizing text view as well as giving it a platform for some change and to possibly add some features and functionality.",
		"github_url": "https://github.com/erchenger/SizeAdjustingTextView"
	},
	{
		"title": "Shimmer for Android",
		"tags": ["view", "animation"],
		"author": "Romain Piel",
		"description": "Shimmer-android is an Android port of Facebook Shimmer library for iOS.",
		"github_url": "https://github.com/RomainPiel/Shimmer-android"
	},
	{
		"title": "FreeFlow",
		"tags": ["view", "scroll", "adapter view"],
		"author": "Comcast",
		"description": "A layout engine for Android that decouples layouts from the View containers that manage scrolling and view recycling. FreeFlow makes it really easy to create custom layouts and beautiful transition animations as data and layouts change",
		"github_url": "https://github.com/Comcast/FreeFlow"
	},
	{
		"title": "android-wheel",
		"tags": ["view", "picker"],
		"author": "Yuri",
		"description": "The wheel widget for Android.",
		"google_url": "https://code.google.com/p/android-wheel"
	},
	{
		"title": "IconicTextView",
		"tags": ["view"],
		"author": "akramfares",
		"description": "IconicTextView is an extension of Android TextView class which provides support for some iconic fonts.",
		"github_url": "https://github.com/akramfares/IconicTextView"
	},
	{
		"title": "PhotoView",
		"tags": ["view", "image"],
		"author": "Chris Banes",
		"description": "Implementation of ImageView for Android that supports zooming, by various touch gestures.",
		"github_url": "https://github.com/chrisbanes/PhotoView"
	},
	{
		"title": "AnyTextView",
		"tags": ["view"],
		"author": "Hans Petter Eide",
		"description": "An extension of Android's TextView and EditText that let's you use the font of your choice",
		"github_url": "https://github.com/hanspeide/anytextview"
	},
	{
		"title": "JazzyViewPager",
		"tags": ["view", "animation"],
		"author": "Jeremy Feinstein",
		"description": "An easy to use ViewPager that adds an awesome set of custom swiping animations. Just change your ViewPagers to JazzyViewPagers, two more steps, and you're good to go!",
		"github_url": "https://github.com/jfeinstein10/JazzyViewPager"
	},
	{
		"title": "6Wunderkinder SlidingLayer for Android",
		"tags": ["view", "animation"],
		"author": "6Wunderkinder",
		"description": "A library that provides an easy way to include an autonomous layer/view that slides from the side of your screen and which is fully gesture ready, the same way as our detail view in Wunderlist 2 does. This pattern can also be seen in Google+’s notification center or in Basecamp’s detail view.",
		"github_url": "https://github.com/6wunderkinder/android-sliding-layer-lib"
	},
	{
		"title": "TimesSquare for Android",
		"tags": ["view", "picker"],
		"author": "Square",
		"description": "Standalone Android widget for picking a single date from a calendar view.",
		"github_url": "https://github.com/square/android-times-square"
	},
	{
		"title": "android-process-button",
		"tags": ["view", "animation"],
		"author": "Dmytro Danylyk",
		"description": "Android Buttons With Built-in Progress Meters.",
		"github_url": "https://github.com/dmytrodanylyk/android-process-button"
	},
	{
		"title": "circular-progress-button",
		"tags": ["view", "animation"],
		"author": "Dmytro Danylyk",
		"description": "Android Button which can morph to Circular Progress",
		"github_url": "https://github.com/dmytrodanylyk/circular-progress-button"
	},
	{
		"title": "Android Image Slider",
		"tags": ["view", "image", "animation"],
		"author": "Daimajia",
		"description": "An amazing and convenient Android image slider.",
		"github_url": "https://github.com/daimajia/AndroidImageSlider"
	},
	{
		"title": "TokenAutoComplete",
		"tags": ["view"],
		"author": "splitwise",
		"description": "TokenAutoComplete is a Android Gmail style token auto-complete text field and filter. It's designed to have an extremely simple API to make it easy for anyone to implement this functionality while still exposing enough customization to let you make it awesome.",
		"github_url": "https://github.com/splitwise/TokenAutoComplete"
	},
	{
		"title": "Android PagerSlidingTabStrip",
		"tags": ["view"],
		"author": "Andreas Stütz",
		"description": "An interactive indicator to navigate between the different pages of a ViewPager",
		"github_url": "https://github.com/astuetz/PagerSlidingTabStrip"
	},
	{
		"title": "PanesLibrary",
		"tags": ["view"],
		"author": "Kenrick Rilee",
		"description": "This library makes it ridiculously easy to make native Android apps with multi-pane tablet layouts. On the phone, the app appears as a conventional app with a sliding menu and a content pane where fragments are stacked on top of each other. On the tablet, the menu and all other fragments appear in dynamically added panes of varying sizes.",
		"github_url": "https://github.com/cricklet/Android-PanesLibrary"
	},
	{
		"title": "Tablelayout",
		"tags": ["view"],
		"author": "Esoteric Software",
		"description": "Table-based layout for Java UI toolkits: libgdx, Swing, Android, TWL",
		"github_url": "https://github.com/EsotericSoftware/tablelayout"
	},
	{
		"title": "ParallaxViewPager",
		"tags": ["view"],
		"author": "andraskindler",
		"description": "An easy-to-use ViewPager subclass with parallax background effect for Android apps.",
		"github_url": "https://github.com/andraskindler/parallaxviewpager"
	},
	{
		"title": "ParallaxScrollView",
		"tags": ["view", "scroll"],
		"author": "Christopher Jenkins",
		"description": "A Parallax ScrollView which takes a background and foreground view, in the ParallexScrollView.",
		"github_url": "https://github.com/chrisjenx/ParallaxScrollView"
	},
	{
		"title": "Calligraphy",
		"tags": ["view"],
		"author": "Christopher Jenkins",
		"description": "Custom fonts in Android the easy way.<br><br>Are you fed up of Custom views to set fonts? Or traversing the ViewTree to find TextViews? Yeah me too.",
		"github_url": "https://github.com/chrisjenx/Calligraphy"
	},
	{
		"title": "Paralloid",
		"tags": ["view", "scroll"],
		"author": "Christopher Jenkins",
		"description": "Paralloid - (Pah-rah-loid) The Android Parallax library.",
		"github_url": "https://github.com/chrisjenx/Paralloid"
	},
	{
		"title": "StaggeredGridView",
		"tags": ["view", "adapter view"],
		"author": "Maurycy Wojtowicz",
		"description": "This is a modified version of Android's experimental StaggeredGridView. The StaggeredGridView allows the user to create a GridView with uneven rows similar to how Pinterest looks. Includes own OnItemClickListener and OnItemLongClickListener, selector, and fixed position restore.",
		"github_url": "https://github.com/maurycyw/StaggeredGridView"
	},
	{
		"title": "GraphView",
		"tags": ["view", "graph"],
		"author": "Jonas Gehring",
		"description": "GraphView is a library for Android to programmatically create flexible and nice-looking diagramms. It is easy to understand, to integrate and to customize it.",
		"github_url": "https://github.com/jjoe64/GraphView",
		"home_url": "http://android-graphview.org/"
	},
	{
		"title": "ChartDroid",
		"tags": ["view", "graph"],
		"author": "kostmo",
		"description": "ChartDroid is an Intent-based 'library application' for static chart and graph generation on Android. It can graph/plot/display numerical data in many representations. As a developer, you need only to have your users install the library, then implement a Content Provider according to this simple specification.",
		"google_url": "https://code.google.com/p/chartdroid/"
	},
	{
		"title": "ChartView",
		"tags": ["view", "graph"],
		"author": "nadavfima",
		"description": "Chart view for android.",
		"github_url": "https://github.com/nadavfima/ChartView/"
	},
	{
		"title": "AChartEngine",
		"tags": ["view", "graph"],
		"author": "4viewsoft",
		"description": "This is a charting software library for Android applications. Mobile phones, tablets and other gadgets running Android will probably benefit of this charting library.",
		"home_url": "http://www.achartengine.org/"
	},
	{
		"title": "AndroidPlot",
		"tags": ["view", "graph"],
		"author": "AndroidPlot",
		"description": "AndroidPlot is an API for creating dynamic and static charts within your Android application. It's designed from the ground up for the Android platform, ...",
		"home_url": "http://androidplot.com",
		"bitbucket_url": "https://bitbucket.org/androidplot/androidplot"
	},
	{
		"title": "HoloGraphLibrary",
		"tags": ["view", "graph"],
		"author": "Daniel Nadeau",
		"description": "Graph library for android.",
		"bitbucket_url": "https://bitbucket.org/danielnadeau/holographlibrary"
	},
	{
		"title": "Flot Android Chart",
		"tags": ["view", "graph"],
		"author": "ylinfo2, jxmei2",
		"description": "Flot Android chart is a free charting system making flot works on Android Platform.",
		"google_url": "https://code.google.com/p/flot-android-chart/"
	},
	{
		"title": "EazeGraph",
		"tags": ["view", "graph"],
		"author": "Paul Cech",
		"description": "EazeGraph is an Android library for creating beautiful and fancy charts. Its main goal was to create a lighweight library which is easy to use and highly customizeable with an 'up-to-date'-look.",
		"github_url": "https://github.com/blackfizz/EazeGraph"
	},
	{
		"title": "Android Saripaar",
		"tags": ["validation"],
		"author": "Ragunath Jawahar",
		"description": "Android Saripaar is a simple, yet powerful rule-based UI validation library for Android. It is the SIMPLEST validation library available for Android.",
		"github_url": "https://github.com/ragunathjawahar/android-saripaar"
	},
	{
		"title": "ValidationKomensky for Android",
		"tags": ["validation"],
		"author": "Inmite s.r.o.",
		"description": "A simple library for validating user input in forms using annotations.",
		"github_url": "https://github.com/inmite/android-validation-komensky"
	},
	{
		"title": "Android-Validator",
		"tags": ["validation"],
		"author": "Benjamin Besse",
		"description": "Form Validator Library for Android",
		"github_url": "https://github.com/throrin19/Android-Validator"
	},
	{
		"title": "Adjacent Fragment Pager Sample",
		"tags": ["fragment"],
		"author": "Jake Wharton",
		"description": "Demonstrates how to manage two fragments where portrait displays them in a ViewPager and landscape displays them side-by-side.",
		"github_url": "https://github.com/JakeWharton/adjacent-fragment-pager-sample"
	},
	{
		"title": "Hansel And Gretel",
		"tags": ["fragment"],
		"author": "Jake Wharton",
		"description": "Android library providing bread crumbs to the support library fragments.",
		"github_url": "https://github.com/JakeWharton/HanselAndGretel"
	},
	{
		"title": "Swipe-to-dismiss + NineOldAndroids",
		"tags": ["animation", "adapter view"],
		"author": "Jake Wharton",
		"description": "Port of Roman Nurik's Swipe-to-dismiss sample code to work on all API levels using NineOldAndroids.",
		"github_url": "https://github.com/JakeWharton/SwipeToDismissNOA"
	},
	{
		"title": "ActionBarSherlock",
		"tags": ["action bar"],
		"author": "Jake Wharton",
		"description": "Action bar implementation which uses the native action bar on Android 4.0+ and a custom implementation on pre-4.0 through a single API and theme.",
		"github_url": "https://github.com/JakeWharton/ActionBarSherlock",
		"home_url": "http://actionbarsherlock.com/"
	},
	{
		"title": "Android ViewPagerIndicator",
		"tags": ["animation", "view", "fragment"],
		"author": "Jake Wharton",
		"description": "Paging indicator widgets compatible with the ViewPager from the Android Support Library and ActionBarSherlock. Originally based on Patrik Åkerfeldt's ViewFlow.",
		"github_url": "https://github.com/JakeWharton/Android-ViewPagerIndicator",
		"home_url": "http://viewpagerindicator.com/"
	},
	{
		"title": "Disk LRU Cache",
		"tags": ["cache"],
		"author": "Jake Wharton",
		"description": "Java implementation of a Disk-based LRU cache which specifically targets Android compatibility.",
		"github_url": "https://github.com/JakeWharton/DiskLruCache",
		"home_url": "http://jakewharton.github.io/DiskLruCache/"
	},
	{
		"title": "U+2020",
		"tags": ["dependency", "injection", "sample app"],
		"author": "Jake Wharton",
		"description": "A sample Android app which showcases advanced usage of Dagger among other open source libraries.",
		"github_url": "https://github.com/JakeWharton/u2020"
	},
	{
		"title": "PID Cat",
		"tags": ["tool"],
		"author": "Jake Wharton",
		"description": "Colored logcat script which only shows log entries for a specific application package.",
		"github_url": "https://github.com/JakeWharton/pidcat"
	},
	{
		"title": "Timber",
		"tags": ["tool"],
		"author": "Jake Wharton",
		"description": "A logger with a small, extensible API which provides utility on top of Android's normal Log class.",
		"github_url": "https://github.com/JakeWharton/timber",
		"home_url": "http://jakewharton.github.io/timber/"
	},
	{
		"title": "Scalpel",
		"tags": ["test"],
		"author": "Jake Wharton",
		"description": "A surgical debugging tool to uncover the layers under your app.",
		"github_url": "https://github.com/JakeWharton/scalpel"
	},
	{
		"title": "Double Espresso",
		"tags": ["test"],
		"author": "Jake Wharton",
		"description": "A pure Gradle port of the Espresso testing utility for Android!",
		"github_url": "https://github.com/JakeWharton/double-espresso"
	},
	{
		"title": "Paraphrase",
		"tags": ["tool"],
		"author": "Jake Wharton",
		"description": "An experimental Gradle plugin which generates compile-safe format string builders.",
		"github_url": "https://github.com/JakeWharton/paraphrase"
	},
	{
		"title": "AndroidStaggeredGrid",
		"tags": ["adapter view", "view"],
		"author": "Atsy, Inc.",
		"description": "An Android staggered grid view which supports multiple columns with rows of varying sizes.<br><br>The StaggeredGridView was developed due to requirements for the Etsy app not met by any existing Android libraries. Namely a stable implementation with the ability to have a different number of columns in landscape & portrait, to sync grid position across orientation changes and support for headers & footers.",
		"github_url": "https://github.com/etsy/AndroidStaggeredGrid"
	},
	{
		"title": "StickyListHeaders",
		"tags": ["adapter view", "scroll"],
		"author": "Emil Sjölander",
		"description": "StickyListHeaders is an Android library that makes it easy to integrate section headers in your ListView. These section headers stick to the top like in the new People app of Android 4.0 Ice Cream Sandwich. This behavior is also found in lists with sections on iOS devices. This library can also be used without the sticky functionality if you just want section headers.",
		"github_url": "https://github.com/emilsjolander/StickyListHeaders"
	},
	{
		"title": "DragSortListView",
		"tags": ["adapter view", "animation", "scroll"],
		"author": "Carl A. Bauer",
		"description": "Android ListView with drag and drop reordering.",
		"github_url": "https://github.com/bauerca/drag-sort-listview"
	},
	{
		"title": "ListViewAnimations ",
		"tags": ["adapter view", "animation", "scroll"],
		"author": "Niek Haarman",
		"description": "An Android library which allows developers to easily add animations to ListView items",
		"github_url": "https://github.com/nhaarman/ListViewAnimations"
	},
	{
		"title": "TwoWayGridView",
		"tags": ["adapter view", "scroll", "view"],
		"author": "Jess Anders",
		"description": "An Android GridView that can be configured to scroll horizontally or vertically.",
		"github_url": "https://github.com/jess-anders/two-way-gridview"
	},
	{
		"title": "JazzyListView",
		"tags": ["adapter view", "view"],
		"author": "Two Toasters",
		"description": "JazzyListView is an extension of ListView designed to animate list item views as they become visible. There are a number of pre-built, bundled effects that can be used by setting the effect in code or an XML layout attribute. Also, it is possible to use a custom effect by implementing a JazzyEffect.",
		"github_url": "https://github.com/twotoasters/JazzyListView"
	},
	{
		"title": "Android QuickReturn Listview",
		"tags": ["adapter view", "scroll"],
		"author": "Lars Werkman",
		"description": "This is an implementation of the QuickReturn UI developed by Roman Nurik and Nick Butcher for a listview.",
		"github_url": "https://github.com/LarsWerkman/QuickReturnListView"
	},
	{
		"title": "Pull To Refresh Views for Android",
		"tags": ["action bar", "adapter view"],
		"author": "Chris Banes",
		"description": "This project aims to provide a reusable Pull to Refresh widget for Android. It was originally based on Johan Nilsson's library (mainly for graphics, strings and animations), but these have been replaced since.",
		"github_url": "https://github.com/chrisbanes/Android-PullToRefresh"
	},
	{
		"title": "Android-BitmapCache",
		"tags": ["cache", "image"],
		"author": "Chris Banes",
		"description": "Android-BitmapCache is a specialised cache, for use with Android Bitmap objects.",
		"github_url": "https://github.com/chrisbanes/Android-BitmapCache"
	},
	{
		"title": "PinnedHeaderListView",
		"tags": ["adapter view", "scroll"],
		"author": "Jimi Smith",
		"description": "A ListView with pinned section headers for Android",
		"github_url": "https://github.com/JimiSmith/PinnedHeaderListView"
	},
	{
		"title": "pinned-section-listview",
		"tags": ["adapter view", "scroll"],
		"author": "Sergej Shafarenka",
		"description": "Easy to use ListView with pinned sections for Android. Pinned section is a header view which sticks to the top of the list until at least one item of that section is visible.",
		"github_url": "https://github.com/beworker/pinned-section-listview"
	},
	{
		"title": "SlideExpandableListView for Android",
		"tags": ["adapter view"],
		"author": "Tjerk Wolterink",
		"description": "Not happy with the Android ExpandableListView android offers? Want something like the Spotify app. This library allows you to have custom listview in wich each list item has an area that will slide-out once the users clicks on a certain button.",
		"github_url": "https://github.com/tjerkw/Android-SlideExpandableListView"
	},
	{
		"title": "Android Swipe-to-Dismiss Sample Code",
		"tags": ["sample app", "adapter view"],
		"author": "Roman Nurik",
		"description": "Android swipe-to-dismiss mini-library and sample code",
		"github_url": "https://github.com/romannurik/Android-SwipeToDismiss",
		"home_url": "https://plus.google.com/+RomanNurik/posts/Fgo1p5uWZLu"
	},
	{
		"title": "Muzei Live Wallpaper",
		"tags": ["sample app"],
		"author": "Roman Nurik",
		"description": "A living museum for your Android home screen.<br><br>Muzei is a live wallpaper that gently refreshes your home screen each day with famous works of art. It also recedes into the background, blurring and dimming artwork to keep your icons and widgets in the spotlight. Simply double touch the wallpaper or open the Muzei app to enjoy and explore the artwork in its full glory.",
		"github_url": "https://github.com/romannurik/muzei"
	},
	{
		"title": "Android Month Calendar Widget Demo",
		"tags": ["sample app", "widget"],
		"author": "Roman Nurik",
		"description": "A simple example of a responsive Month Calendar app widget for Android 4.1+.",
		"github_url": "https://github.com/romannurik/Android-MonthCalendarWidget"
	},
	{
		"title": "Android WizardPager Sample Code",
		"tags": ["sample app", "fragment"],
		"author": "Roman Nurik",
		"description": "Android pager-style wizard flow sample code",
		"github_url": "https://github.com/romannurik/Android-WizardPager",
		"home_url": "https://plus.google.com/+RomanNurik/posts/6cVymZvn3f4"
	},
	{
		"title": "Android Asset Studio",
		"tags": ["tool"],
		"author": "Roman Nurik",
		"description": "A web-based set of tools for generating graphics and other assets that would eventually be in an Android application's res/ directory.",
		"github_url": "https://github.com/romannurik/AndroidAssetStudio",
		"home_url": "http://romannurik.github.io/AndroidAssetStudio/"
	},
	{
		"title": "",
		"tags": [""],
		"author": "",
		"description": "",
		"github_url": "",
		"home_url": "",
		"google_url": ""
	},
	{
		"title": "",
		"tags": [""],
		"author": "",
		"description": "",
		"github_url": "",
		"home_url": "",
		"google_url": ""
	},
	{
		"title": "",
		"tags": [""],
		"author": "",
		"description": "",
		"github_url": "",
		"home_url": "",
		"google_url": ""
	},
	{
		"title": "",
		"tags": [""],
		"author": "",
		"description": "",
		"github_url": "",
		"home_url": "",
		"google_url": ""
	},
	{
		"title": "",
		"tags": [""],
		"author": "",
		"description": "",
		"github_url": "",
		"home_url": "",
		"google_url": ""
	},
	{
		"title": "",
		"tags": [""],
		"author": "",
		"description": "",
		"github_url": "",
		"home_url": "",
		"google_url": ""
	},
	{
		"title": "",
		"tags": [""],
		"author": "",
		"description": "",
		"github_url": "",
		"home_url": "",
		"google_url": ""
	},
	{
		"title": "",
		"tags": [""],
		"author": "",
		"description": "",
		"github_url": "",
		"home_url": "",
		"google_url": ""
	},
	{
		"title": "",
		"tags": [""],
		"author": "",
		"description": "",
		"github_url": "",
		"home_url": "",
		"google_url": ""
	},
	{
		"title": "",
		"tags": [""],
		"author": "",
		"description": "",
		"github_url": "",
		"home_url": "",
		"google_url": ""
	},
	{
		"title": "",
		"tags": [""],
		"author": "",
		"description": "",
		"github_url": "",
		"home_url": "",
		"google_url": ""
	},
	{
		"title": "",
		"tags": [""],
		"author": "",
		"description": "",
		"github_url": "",
		"home_url": "",
		"google_url": ""
	}
];


$(document).ready(function() {
	setupTags();
	setupItems();
	setupShuffle();
	setupFilters();
	setupSearch();
});

setupTags = function(){
	tags.sort();
	for (var i = 0; i < tags.length; i++) {
		$(".filters").append('<button class="btn btn-filter" type="button" data-group="'+tags[i].toLowerCase()+'">'+tags[i]+'</button>');
	};
}

setupItems = function(){
	// Sort the array.
	items.sort(function(a,b) { 
		if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
		if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
		return 0;
	});

	for (var i = 0; i < items.length; i++) {

		// Prepare button urls.
		buttonsString = "";
		if (items[i].home_url) buttonsString+= '<a href="'+items[i].home_url+'" class="btn btn-primary"><i class="fa fa-home"></i> Homepage</a>';
		if (items[i].github_url) buttonsString+= '<a href="'+items[i].github_url+'" class="btn btn-primary"><i class="fa fa-github-alt"></i> Github</a>';
		if (items[i].google_url) buttonsString+= '<a href="'+items[i].google_url+'" class="btn btn-primary"><i class="fa fa-google"></i> Google Code</a>';
		if (items[i].bitbucket_url) buttonsString+= '<a href="'+items[i].bitbucket_url+'" class="btn btn-primary"><i class="fa fa-bitbucket"></i> Bitbucket</a>';

		// Prepare author html.
		userString = "";
		if (items[i].author) userString = '<div class="author meta"><i class="fa fa-user"></i> <span class="author">'+items[i].author+'</span></div>';

		// Prepare tags.
		tagsString = "";
		tagsData = "";
		if (items[i].tags && items[i].tags.length>0) {
			for (var j = 0; j < items[i].tags.length; j++) {
				tagsString += items[i].tags[j];
				tagsData += items[i].tags[j];
				if (j < items[i].tags.length-1) {
					tagsString += ", ";
					tagsData += ",";
				}
			}
		}

		// Append the html.
		$("#items").append(
			'<section class="item" data-groups="'+tagsData+'">'+
				'<a href="'+(items[i].home_url?items[i].home_url:(items[i].github_url?items[i].github_url:items[i].google_url))+'" class="item-title"><h3>'+items[i].title+'</h3></a>'+
				userString+
				'<div class="tags-container meta"><i class="fa fa-tag"></i> <span class="tags">'+tagsString+'</span></div>'+
				'<div class="description">'+items[i].description+'</div>'+
				'<div class="buttons-container">'+buttonsString+'</div>'+
			'</section>'
		);
	};
}

setupFilters = function(){
	$('.btn-filter').on('click', function(){
		isActive = $(this).hasClass("active");
		if (!isActive) group = $(this).data('group');
		else group = 'all';


		if (!isActive) {
			$('.filters .active').removeClass('active');
		}


		$(this).button('toggle');

		$itemsElement.shuffle( 'shuffle', group );
	})
}

setupShuffle = function(){
	$itemsElement = $('#items');

	$itemsElement.shuffle({
		itemSelector: '.item',
		gutterWidth: 20,
		delimeter: ","
	});
}

setupSearch = function(){
	$('.search-input').on('keyup change', function() {
		var val = this.value.toLowerCase();
		$itemsElement.shuffle('shuffle', function($el, shuffle) {

			// Only search elements in the current group
			if (shuffle.group !== 'all' && $.inArray(shuffle.group, $el.data('groups')) === -1) {
				return false;
			}

			var text1 = $.trim($el.find('.item-title').text()).toLowerCase();
			var text2 = $.trim($el.find('.tags').text()).toLowerCase();
			var text3 = $.trim($el.find('.description').text()).toLowerCase();
			var text4 = $.trim($el.find('.author').text()).toLowerCase();
			
			return text1.indexOf(val) !== -1 || text2.indexOf(val) !== -1 || text3.indexOf(val) !== -1 || text4.indexOf(val) !== -1;
		});
	});
}