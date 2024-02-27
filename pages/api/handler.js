import { EventEmitter } from "events";
// Example: Listening for an event

const webhookEmitter = new EventEmitter()
// webhookEmitter.setMaxListeners(20)
console.log(webhookEmitter)
// setInterval(() => {
//   webhookEmitter.emit('webhookReceived', {id:1,msg:'test'}); // Emit the webhookReceived event with the payload

// }, 5000);

// const mockEvents = [
//   { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' },
//   { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' }, { id: 1, message: 'Event 1' },
//   { id: 2, message: 'Event 2' },
//   // Add more mock events as needed
// ];

// let eventIndex = 0;

// function mockEmit(event, payload) {
//   // Emit the specified event with the provided data
//   webhookEmitter.emit(event, payload);
//   // console.log(webhookEmitter)
// }

// Function to simulate sending events at regular intervals
// export function sendMockEvents() {
//   setInterval(() => {
//     const event = mockEvents[eventIndex];
//     mockEmit('webhookReceived', event);
//     eventIndex = (eventIndex + 1) % mockEvents.length;

//   }, 5000); // Send an event every 5 seconds
// }





// sendMockEvents()




// setInterval(() => {
//   webhookEmitter.emit('webhookReceived', { id: 1, msg: 'test' })
// }, 10000);

export default function handler(req, res) {

  try {
    console.log(req.method)
    if (req.method === 'GET') {
      // if (req.headers.accept && req.headers.accept.includes('text/event-stream')) {
      res.writeHead(200, {
        'Content-Encoding': 'none',
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache, no-transform',
        'Connection': 'keep-alive',
        'X-Accel-Buffering': 'no',
        'Access-Control-Allow-Origin': '*'
      });
      // res.writeHead(200, {
      //   'Content-Type': 'text/event-stream',
      //   'Cache-Control': 'no-cache',
      //   'Connection': 'keep-alive',sending
      //   'Access-Control-Allow-Origin': '*'
      // })





      const intervalId = setInterval(() => {
        res.write(': ping\n\n'); // Send a "ping" event every few seconds to keep the connection alive

      }, 1000);
      console.log('test65')



      console.log('test1')

      // const test = setInterval(() => {

      //   res.write(`${JSON.stringify(sseEvent)}\n\n`, (error) => {
      //     console.log('testtttttttttttttttt', error)
      //   })
      //   res.flush()
      // }, 5000);



      webhookEmitter.on('webhookReceived', (data) => { // Listen for the webhookReceived event



        res.write(`data:${JSON.stringify(data)}\n\n`, (error) => {
          if (error) {

          } else {
            console.log(`${JSON.stringify(data)}\n\n`)
            console.log('tessssssssssssssssssssssssssssst', error)

          }

        })


        res.on('error', (error) => {
          console.error('Error sending SSE data data darta:', error);
          // Optionally, you can also end the response or take other error handling actions here
        });





        console.log('data emited finallyyyyyyy')
      });



      // Example: Emitting an event

      console.log('tet2')
      req.socket.on('close', () => {
        console.log('cl:osedddddddddd')
        clearInterval(intervalId);
        webhookEmitter.removeAllListeners('webhookReceived');
        res.end();
      });
      console.log('tet3')


      // }
    }
    // }
    else if (req.method === 'POST') {


      const payload = req.body




      // Example: Emitting an event
      webhookEmitter.emit('webhookReceived', payload); // Emit the webhookReceived event with the payload

      console.log('tet2')


      // Process the webhook payload
      // Assuming the payload is in the request body



      // Emit an SSE event with the payload data


      // Emit an SSE event with the payload data



      // Set SSE headers


      // Listen for webhook events

      console.log('test1')

      // Return a success response
      res.status(200).json({ message: 'Webhook received test successfully!' });

    }

  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ error: 'An error occurred while processing the webhook.' });
  }

}

// async function processPayload(payload) {
//   // Perform any asynchronous processing of the payload here
//   // For example, you could make database queries or API calls

//   // This is a placeholder async function, replace it with actual processing
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Payload processed:', payload);

//       resolve();
//     }, 3000); // Simulate asynchronous processing with a delay of 1 second
//   });
// }
