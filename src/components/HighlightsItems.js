import React from "react";

function HighlightsItems(props) {
  return (
    <>
      <div>
        <li>
          <table>
            <tbody>
              <tr>
                <td>✔️</td>
                <td> {props.listItem}</td>
              </tr>
            </tbody>
          </table>
        </li>
      </div>
    </>
  );
}

export default HighlightsItems;
