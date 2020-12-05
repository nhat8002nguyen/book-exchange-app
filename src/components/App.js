import React from "react";
import ReactDOM from "react-dom";
import BookCardView from "./BookCardView";

function App() {
  return (
    <div>
      <table>
        <tr>
          <td>
            <BookCardView />
          </td>
          <td>
            <BookCardView />
          </td>
          <td>
            <BookCardView />
          </td>
        </tr>
        <tr>
          <td>
            <BookCardView />
          </td>
          <td>
            <BookCardView />
          </td>
          <td>
            <BookCardView />
          </td>
        </tr>
        <tr>
          <td>
            <BookCardView />
          </td>
          <td>
            <BookCardView />
          </td>
          <td>
            <BookCardView />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
