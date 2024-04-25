import BtnRandom from "./ButtonRadom";
import Line from "./DivisionLive";
export default function QuoteCard({id, quote, click}) {
  return (
    <blockquote className="blockquote_container">
      <h1>advice #{id}</h1>
      <p>
        "{quote}"
      </p>
      <Line/>
      <BtnRandom getEvent={click}/>
    </blockquote>
  );
}
