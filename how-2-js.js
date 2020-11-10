# first we create the javascript file
echo "console.log('Hello World')" > how-2-js.js

# To run JS in your browser you need to import it from an HTML page:
echo '<script type="module" src="how-2-js.js"></script>' > index.html

# Finally let's create a simple web server
&>/dev/null python3 -m http.server &

# Now open your browser at the specified port
xdg-open 'http://localhost:8000'
