class Eel {
  /* 
  This  is for testing online.
  Here are placeholders of the eel functions
  so that the front-end can be tested with 'npm run dev'
  */
  hello_world() {
    console.log("Hello from eel placeholder");
  }
  get_greeting(string) {
    /*
    This function has a callback.
    If you call eel.get_greeting('world')(updateGreeting)
    The updateGreeting will be called with the result of eel.get_greeting
    */
    const greeting = `Hello ${string} (js)`;
    return (func) => func(greeting);
  }
}

const eel = new Eel();
