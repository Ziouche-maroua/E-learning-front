import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputPoints: [[0, 0], [1, 0], [0, 1], [1, 1]],
      transformedPoints: [],
    };
  }

  componentDidMount() {
    // Define the linear transformation matrix
    const T_matrix = [[1, 2], [0, 1]];

    // Apply the transformation to input points
    const transformedPoints = this.state.inputPoints.map(point =>
      [point[0] * T_matrix[0][0] + point[1] * T_matrix[0][1], point[1] * T_matrix[1][1]]
    );

    this.setState({ transformedPoints });
  }

  render() {
    return (
      <div className="App">
        <h1>Linear Transformation Visualization</h1>
        <svg width="400" height="400">
          {/* Draw axes */}
          <line x1="200" y1="0" x2="200" y2="400" stroke="black" />
          <line x1="0" y1="200" x2="400" y2="200" stroke="black" />

          {/* Draw input points */}
          {this.state.inputPoints.map((point, index) => (
            <circle key={index} cx={200 + point[0] * 50} cy={200 - point[1] * 50} r="5" fill="blue" />
          ))}

          {/* Draw transformed points */}
          {this.state.transformedPoints.map((point, index) => (
            <circle key={index} cx={200 + point[0] * 50} cy={200 - point[1] * 50} r="5" fill="red" />
          ))}
        </svg>
      </div>
    );
  }
}

export default App;

// 2nd exemple for kernel and image example!

//   const [inputPoints] = useState([-2, -1, 0, 1, 2]); // Input points from R^1
//   const [transformedPoints] = useState([[-2, -2], [-1, -1], [0, 0], [1, 1], [2, 2]]); // Transformed points in R^2

//   // Log transformed points for debugging
  
// useEffect(()=>{
//   console.log("Transformed Points:", transformedPoints);
//   // Calculate Kernel
// })
// const kernel = inputPoints.filter(point => point === 0);
//   // Calculate Image
//   const image = transformedPoints;

//   return (
//     <div className="App">
//       <h1>Linear Transformation Visualization</h1>
//       <h2>Kernel: {kernel.join(", ")}</h2>
//       <h2>Image: {image.map(point => `(${point[0]}, ${point[1]})`).join(", ")}</h2>
//       <svg width="400" height="400">
//         {/* Draw axes */}
//         <line x1="200" y1="0" x2="200" y2="400" stroke="black" />
//         <line x1="0" y1="200" x2="400" y2="200" stroke="black" />

//         {/* Draw kernel with label */}
//         {kernel.map((_, index) => (
//           <g key={index}>
//             <circle cx="200" cy="200" r="3" fill="green" />
//             <text x="210" y="205" fontSize="12" fill="green">Kernel (0)</text>
//           </g>
//         ))}

//         {/* Draw transformed points with labels */}
//         {transformedPoints.map((point, index) => (
//           <g key={index}>
//             {/* Draw line from original to transformed points */}
//             <line x1={200} y1={200} x2={200 + point[0] * 20} y2={200 - point[1] * 20} stroke="#ccc" />
//             {/* Draw transformed point */}
//             <circle cx={200 + point[0] * 20} cy={200 - point[1] * 20} r="5" fill="#f00" />
//             {/* Label for transformed point */}
//             <text x={200 + point[0] * 20 + 5} y={200 - point[1] * 20 - 5} fontSize="12" fill="#000">{inputPoints[index]}</text>
//           </g>
//         ))}

//         {/* Draw unit vectors */}
//         {[...Array(5)].map((_, i) => (
//           <g key={i}>
//             <circle cx="200" cy={200 - i * 20} r="3" fill="blue" />
//             <text x="210" y={200 - i * 20 + 5} fontSize="12" fill="blue">{i}</text>
//           </g>
//         ))}
//       </svg>
//       {/* <Exemple list={3} />   */}
//     </div>
//   );
// }
