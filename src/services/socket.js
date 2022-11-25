import io from "socket.io-client";
import VueSocketIO from "vue-socket.io";

const vueSocketInstance = new VueSocketIO({
  debug: true,
  connection: io("http://localhost:3000"),
});

export default vueSocketInstance; 