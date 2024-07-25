import React from "react";
import "./socialPost.css";

function SocialPost() {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#Id</th>
            <th scope="col">Social</th>
            <th scope="col">Post</th>
            <th scope="col">Time</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">001</th>
            <td>Instagram</td>
            <td>Photo</td>
            <td>11:20AM</td>
            <td style={{ color: "cyan" }}>Done</td>
          </tr>
          <tr>
            <th scope="row">002</th>
            <td>Instagram</td>
            <td>Reel</td>
            <td>1:00PM</td>
            <td style={{ color: "orange" }}>Pending</td>
          </tr>
          <tr>
            <th scope="row">003</th>
            <td>Facebook</td>
            <td>Post</td>
            <td>2:10PM</td>
            <td style={{ color: "orange" }}>Pending</td>
          </tr>
          <tr>
            <th scope="row">004</th>
            <td>Twitter</td>
            <td>Post</td>
            <td>2:36PM</td>
            <td style={{ color: "cyan" }}>Done</td>
          </tr>
          <tr>
            <th scope="row">005</th>
            <td>LinkedIn</td>
            <td>Story</td>
            <td>5:44PM</td>
            <td style={{ color: "cyan" }}>Done</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SocialPost;
