import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import "../../assets/styles/custom.css";

const VS = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', '0 0 400 400');

    const width = 400;
    const height = 400;
    const origin = [width / 2, height / 2];

    const v1 = [40, 25];
    const v2 = [25, 50];
    const A = [[2, 1], [1, 3]];

    const transformVector = (v, A) => {
      return [
        A[0][0] * v[0] + A[0][1] * v[1],
        A[1][0] * v[0] + A[1][1] * v[1],
      ];
    };

    const interpolate = (start, end, t) => {
      return start.map((startVal, i) => startVal + t * (end[i] - startVal));
    };

    const drawVectors = (vectors, labels) => {
      svg.selectAll('line.vector').remove();
      svg.selectAll('text.label').remove();

      vectors.forEach((v, i) => {
        svg.append('line')
          .attr('class', 'vector')
          .attr('x1', origin[0])
          .attr('y1', origin[1])
          .attr('x2', origin[0] + v[0])
          .attr('y2', origin[1] - v[1])
          .attr('stroke', ['#AEC6CF', '#FFB347', '#77DD77', '#CFCFC4'][i])
          .attr('stroke-width', 2)
          .attr('marker-end', 'url(#arrow)');

        svg.append('text')
          .attr('class', 'label')
          .attr('x', origin[0] + v[0])
          .attr('y', origin[1] - v[1])
          .attr('dy', -5)
          .attr('text-anchor', 'middle')
          .attr('font-family', 'Arial')
          .attr('font-size', '12px')
          .text(labels[i]);
      });
    };

    const animateTransformation = () => {
      const frames = 100;
      const duration = 3000;
      const interval = duration / frames;

      let t = 0;
      const step = () => {
        t += 1 / frames;
        const interpolatedMatrix = interpolate(
          [1, 0, 0, 1],  // Identity matrix as flat array
          A.flat(),
          t
        );
        const interpolatedVectors = [
          transformVector(v1, [
            [interpolatedMatrix[0], interpolatedMatrix[1]],
            [interpolatedMatrix[2], interpolatedMatrix[3]]
          ]),
          transformVector(v2, [
            [interpolatedMatrix[0], interpolatedMatrix[1]],
            [interpolatedMatrix[2], interpolatedMatrix[3]]
          ])
        ];

        drawVectors(interpolatedVectors, ['v1', 'v2']);

        if (t >= 1) {
          t = 0; // Reset t
        }
        setTimeout(step, interval);
      };

      step();
    };

    svg.append('defs').append('marker')
      .attr('id', 'arrow')
      .attr('viewBox', '0 0 10 10')
      .attr('refX', '5')
      .attr('refY', '5')
      .attr('markerWidth', '6')
      .attr('markerHeight', '6')
      .attr('orient', 'auto-start-reverse')
      .append('path')
      .attr('d', 'M 0 0 L 10 5 L 0 10 z')
      .attr('fill', 'black');

    drawVectors([v1, v2], ['v1', 'v2']);
    animateTransformation();

  }, []);

  return (
    <div className="flex flex-col items-center mt-4 mb-8">
      <h1 className="text-3xl md:text-3xl lg:text-4xl text-[#ffc107] font-bold mb-8 mt-4">Vector Space Visualization</h1>
      <svg ref={svgRef} className="border border-gray-300 mt-5 w-full max-w-md md:max-w-lg lg:max-w-1xl h-auto"></svg>
      <div className="max-w-3xl text-left mt-5 font-sans">

        {/* Content */}
        <h2 className="text-2xl md:text-3xl varblue-text poetsen-font mt-4 mb-4">Definition</h2>
        <p className="leading-relaxed p-4 rounded bg-blue-200 text-black font-bold mt-2">
          A vector space (or linear space) is a collection of vectors, which are objects that can be added together and multiplied ("scaled") by numbers, called scalars. Scalars are often taken to be real numbers, but there are also vector spaces with scalar multiplication by complex numbers, rational numbers, or generally any field.
        </p>
        <h2 className="text-2xl md:text-3xl varblue-text poetsen-font mb-4 mt-4">Internal Law (Vector Addition)</h2>
        {/* Other content... */}
        <p className="font-bold leading-relaxed mt-2 mb-2">
          Vector addition is the operation of adding two vectors together to yield another vector. For example, if <i>v</i> and <i>w</i> are vectors, their sum <i>v + w</i> is also a vector in the same vector space.
        </p>
        <div className="bg-custom-green p-4 rounded mt-4">
          <p className="text-gray-800"><b>Example :</b> Let <i>v = [2, 3]</i> and <i>w = [1, 4]</i>, then <i>v + w = [3, 7]</i>.</p>
        </div>
        <p className="leading-relaxed mt-2">
          <b>Commutativity:</b> For any vectors <i>v</i> and <i>w</i>, <i>v + w = w + v</i>.
        </p>
        <div className="bg-custom-green p-4 rounded mt-2">
          <p className="text-gray-800"><b>Example :</b> <i>[2, 3] + [1, 4] = [3, 7]</i> and <i>[1, 4] + [2, 3] = [3, 7]</i>.</p>
        </div>
        <p className="leading-relaxed mt-2">
          <b>Associativity:</b> For any vectors <i>u</i>, <i>v</i>, and <i>w</i>, <i>(u + v) + w = u + (v + w)</i>.
        </p>
        <div className="bg-custom-green p-4 rounded mt-2">
          <p className="text-gray-800"><b>Example :</b> <i>[1, 2] + ([3, 4] + [5, 6]) = ([1, 2] + [3, 4]) + [5, 6]</i>.</p>
        </div>
        <p className="leading-relaxed mt-2">
          <b>Identity Element:</b> There exists a vector <i>0</i> such that <i>v + 0 = v</i> for any vector <i>v</i>.
        </p>
        <div className="bg-custom-green p-4 rounded mt-2">
          <p className="text-gray-800"><b>Example :</b> <i>[2, 3] + [0, 0] = [2, 3]</i>.</p>
        </div>
        <p className="leading-relaxed mt-2">
          <b>Inverse Element:</b> For every vector <i>v</i>, there exists a vector <i>-v</i> such that <i>v + (-v) = 0</i>.
        </p>
        <div className="bg-custom-green p-4 rounded mt-2">
          <p className="text-gray-800"><b>Example :</b> <i>[2, 3] + [-2, -3] = [0, 0]</i>.</p>
        </div>
        <h2 className="text-2xl md:text-3xl varblue-text poetsen-font mb-4 mt-4">External Law (Scalar Multiplication)</h2>
        {/* Other content... */}
        <p className="font-bold leading-relaxed mt-2 mb-2">
          Scalar multiplication is the operation of multiplying a vector by a scalar (a real number) to yield another vector. For example, if <i>v</i> is a vector and <i>c</i> is a scalar, then <i>cv</i> is a vector in the same vector space.
        </p>
        <div className="bg-custom-green p-4 rounded mt-4">
          <p className="text-gray-800"><b>Example :</b> Let <i>v = [2, 3]</i> and <i>c = 2</i>, then <i>cv = 2[2, 3] = [4, 6]</i>.</p>
        </div>
        <p className="leading-relaxed mt-2">
          <b>Distributivity:</b> For any scalar <i>c</i> and vectors <i>v</i> and <i>w</i>, <i>c(v + w) = cv + cw</i>.
        </p>
        <div className="bg-custom-green p-4 rounded mt-2">
          <p className="text-gray-800"><b>Example :</b> <i>2([2, 3] + [1, 4]) = 2[3, 7] = [6, 14]</i> and <i>2[2, 3] + 2[1, 4] = [4, 6] + [2, 8] = [6, 14]</i>.</p>
        </div>
        <p className="leading-relaxed mt-2">
          <b>Associativity:</b> For any scalars <i>c</i> and <i>d</i> and vector <i>v</i>, <i>c(dv) = (cd)v</i>.
        </p>
        <div className="bg-custom-green p-4 rounded mt-2">
          <p className="text-gray-800"><b>Example :</b> <i>2(3[2, 3]) = (2*3)[2, 3] = 6[2, 3] = [12, 18]</i>.</p>
        </div>
        <p className="leading-relaxed mt-2">
          <b>Identity Element:</b> For any vector <i>v</i>, <i>1v = v</i>.
        </p>
        <div className="bg-custom-green p-4 rounded mt-2 mb-2">
          <p className="text-gray-800"><b>Example :</b> <i>1[2, 3] = [2, 3]</i>.</p>
        </div>
      </div>
    </div>
  );
};

export default VS;
