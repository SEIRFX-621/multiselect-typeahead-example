# What is this

This is an example project to show express put and delete routes as well as a quick and dirty multiselect work around. 

# PUT and POST

Many of your projects were missing the 'method-override' middleware. You can see this inside the index.js on ln 7 and 13. 

This is what is needed to get router.put and router.delete to operate as expected with the '?_method=PUT' and '?_method=DELETE' query params in your forms. You can see this done in the views/form.ejs view file. 

# Stolen code

I stole the multiselect code from this blog post 
https://www.cssscript.com/single-multi-select-vanilla/ 

feel free to read through it for more information on how to use this code snippet. 

To use the multiselect make sure that your express.static director(public) is configured in your service(see index.js ln 14). You will then add the typeahead.js and typeahead.css files to your public/js and public.css respectively. 

Once you have configured your static route in express and added the css and js files for typeahead, you will want to include those files in your layout.ejs, include the css and script tags as we have in this example inside of layout.ejs on ln 17 and 23. 

Once that has been completed, you can add the script tag seen at the bottom of form.ejs to connect the vanillaSelectBox class to your select html tags in the same file. 

Good luck, hope this helps. 

