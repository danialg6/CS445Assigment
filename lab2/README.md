## lab2 
### how JS engine optimize JavaScript code.

* javascript engine is a program that executes javascript code.
* there are many diferent engines used to optimize javascript code. among these are:
    * V8  Google chrome javscriptengine
    * Spidermonkey which is mozila firefox javscriptengine
    * Chakra microsoft's javscriptengine
## how V8 optimizes javascript code

![image](https://github.com/danialg6/CS445Assigment/blob/master/lab2/image/v8.PNG)

 * "High-level code journey through V8 Engine
So there is a thing called cloud. When we do a webpack build, it gets stored in cloud and our js code gets served from the cloud when user requests it. How it reached cloud? That’s a question for backend guys 😜
Now the cloud sends us JavaScript file, which is a junk of text basically and now to make sense it goes through a parser which parses the JavaScript file and converts it to an AST(Abstract Syntax Tree). You can think of AST as data-structure that represents what this code really means.
Now the V8 compilers take care of rest of the work. So the first step is interpreter which interprets the code and identify the hotspots which I mentioned earlier and generates semi-optimized bytecode. Any code that can be optimized then goes to the optimizing compiler. Then the optimizing compiler analyzes the code and make assumptions to make it even faster. The optimizing compiler generates highly optimized machine code, but we discussed that sometimes it has to de-optimize on runtime and change back to the byte code. Hats off to the naming of V8 team, they really know how to name their engines. The interpreter which generates the bytecode is called Ignition (yes the ignition of the car, i.e. the start) and the optimizing compiler is called TurboFan (turbo boost which speeds up the car).
How to optimize now?
As you have already guessed by now we need to ship code which goes to that green arrow to run our code faster. And we must avoid the red arrow which is not good.
Three things engine does to help us out
Speculative optimization
Hidden classes for dynamic lookups
Function inlining." source https://codeburst.io/javascript-compiler-optimization-techniques-only-for-experts-58d6f5f958ca.

## ## how SpiderMonkey optimizes javascript code

![image](https://github.com/danialg6/CS445Assigment/blob/master/lab2/image/SpiderMonkey.PNG)

* "SpiderMonkey, Mozilla’s JavaScript engine as used in Firefox and in SpiderNode, does it a little differently. They have not one but two optimizing compilers. The interpreter optimizes into the Baseline compiler, which produces somewhat optimized code. Combined with profiling data gathered while running the code, the IonMonkey compiler can produce heavily-optimized code. If the speculative optimization fails, IonMonkey falls back to the Baseline code." source https://mathiasbynens.be/notes/shapes-ics



## how Chakra optimize javascript code
* "Chakra, Microsoft’s JavaScript engine as used in Edge and Node-ChakraCore, has a very similar setup with two optimizing compilers. The interpreter optimizes into SimpleJIT — where JIT stands for Just-In-Time compiler — which produces somewhat optimized code. Combined with profiling data, the FullJIT can produce more-heavily-optimized code." source https://mathiasbynens.be/notes/shapes-ics

![image](https://github.com/danialg6/CS445Assigment/blob/master/lab2/image/Chakra.PNG)



