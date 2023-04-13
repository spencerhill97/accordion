import questions from "./data";
import Question from "./components/Question";

const App = () => {
  return (
    <main className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        const { id, title, info } = question;
        return <Question key={id} {...question} />;
      })}
    </main>
  );
};
export default App;
