fuction Connection(){
       const mongodb = require('mongodb');
const DB = 'mongodb+srv://osproject_admim:OsProject908@cluster0.kwcneuy.mongodb.net/scheduling_algos?retryWrites=true&w=majority'
mongodb.connect(DB).then(()=> 
       {
            console.log('connection succesful!');
       }
    ).catch(err) => console.log('no connection'));
}
// end of connection function
const text = 'Welcome to our OS Team Project Website';
let i = 0;
const typing = () => {
    if (i < text.length) {
      document.getElementById("heading").innerHTML += text.charAt(i);
      i++;
      setTimeout(typing,70);
    }
}
}
let i2 = 0;
const text2 = 'Calculate Process Scheduling Algorithms';
const typing2 = () => {
    if (i2 < text2.length) {
      document.getElementById("algo").innerHTML += text2.charAt(i2);
      i2++;
      setTimeout(typing2, 70);
    }
}
setTimeout(typing,0);
setTimeout(typing2,5000);
Connection();