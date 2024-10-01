# V8 Hemi Umbraco Sample Package

This project is designed to serve as an example of how to build a project in Umbraco.
Umbraco's tutorials give you a great start in how to build a "Hello World" extension, but many of the 
community-built packages use a more complex project structure, and it's not always clear _why_. 

This package is intended to offer an opinionated example that is set up for long-term development across 
multiple Umbraco versions. Hopefully it can serve as a bridge between "Hello World" packages and a
full-fledged maintainable project. 

## What's In This Project

We're going to learn how to modify Umbraco in the same way decades of tinkerers have learned how to modify cars: 
_we're putting a Hemi in it_. This is just a fun basic example that demonstrates the following extension points:

* Adding custom configuration
* Including custom services and controllers
* Adding a new OpenAPI-compatible endpoint, securing it, generating documentation and client code
* A custom dashboard view
* Custom Web Component using Lit
* How to structure a project for supporting multiple target versions

## Sources and Examples

This project draws from a lot of other example projects that you may find useful: 

* **[Kevin Jump's TimeDashboard](kjtd)**: This project is Kevin's example from learning to work with Umbraco v14 in the 
  early stages. Kevin also has a really excellent series of [articles on building for Umbraco v14](kjguide). 
  These are must-reads for new Umbraco package developers working with version 14
* **[Knowit's Belissima Bootstrapper](knowit)**: Provides an auto-generated project with a layout similar to this one.
* **[Jesper Mayntzhusen's Extension Comparison](jmcompare)**: As part of CodeCabin, Jesper put together a short set of 
  examples building the same extension in both Umbraco v13 and v14. These are mostly built out in the most direct way 
  possible and offer good comparisons for v13 developers looking to see how the same thing might be built in v14
* **[Richard Ockerby's Vanilla JS Example](rosimple)**: While most builds of Umbraco Backoffice extensions leverage 
  complex frontend pipelines, Richard put together a _very_ basic example that shows that you can build a v14 
  backoffice extension using only standard javascript

## Technologies

For veteran Umbraco Devs, v14 makes use of a lot of new technologies that might be unfamiliar. Here are a number of new 
technologies and some guides to help you get started:

* **[Web Components](wc)**: Web Components are a standardized approach to building self-contained and reusable custom 
  functionality. Supported by all major browsers, they offer a standards-based approach to reusable frontend code that 
  would have previously required frameworks like React, Vuejs, and etc
* **[Lit](lit)**: While you can build web components without using any framework, it's helpful to have some structure. 
  Lit provides an extremely thin framework around web components functionality to reduce boilerplate and improve the 
  developer experience.
* **[TypeScript](ts)**: TypeScript provides a more modern framework to write JavaScript in a way that provides a cleaner
  syntax, intellisense, and type safety, making writing JavaScript feel a little like writing a compiled language. 
  Typescript compiles into JavaScript for deployment.
* **[Vite](vite)**: Vite provides a very fast modern build pipeline for developer tasks with front end code. You probably
  won't need the details on this at first, but understanding it is helpful for growing into more complicated build tasks.
* **[Swagger](swag)**: Umbraco v14 uses the OpenAPI standard, which allows nice things to happen around APIs automatically.
  One of those is Swagger, which auto-generates documentation for API endpoints. Umbraco v14 includes Swagger out of the box.
* **[Hey Api](hey)**: Another nice thing that OpenAPI allows for is automatic client code generation, meaning
  that your browser code can get type safety and intellisense for your API with minimal work. The @hey-api/openapi-ts 
  package handles this code generation.

## Guides

If building packages is new to you, here are some resources to help you get started: 

* **[Umbraco's Documentation](ug)**: Umbraco provides an excellent guide on creating your first extension
* **[Kevin Jump's Early Adopters Guide to v14](kj1)**: While we're no longer 'early', Kevin's series still provides a
great starting point for someone who has written code for Umbraco in the past but is new to v14.


[kjtd]:https://github.com/KevinJump/TimeDashboard
[kjguide]:https://dev.to/kevinjump/series
[knowit]:https://github.com/KXCPH/Knowit.Umbraco.Bellissima.Bootstrapper
[jmcompare]:https://github.com/jemayn/ExtensionComparisons
[rosimple]:https://github.com/Rockerby/Umbraco-14-Sample-Package

[wc]:https://www.webcomponents.org/introduction
[lit]:https://lit.dev/docs/getting-started/
[ts]:https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
[vite]:https://vitejs.dev/guide/
[swag]:https://swagger.io/
[hey]:https://heyapi.vercel.app/

[ug]:https://docs.umbraco.com/umbraco-cms/tutorials/creating-your-first-extension#extension-with-vite-typescript-and-lit
[kj1]:https://dev.to/kevinjump/early-adoptors-guide-to-umbraco-v14-package-structure-3i67