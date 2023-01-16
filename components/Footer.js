import React from "react";

export default function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className=" space-y-4 text-xs text-gray-800 ">
        <h5 className="font-bold">ABOUT</h5>
        <p>This is not a real site</p>
        <p>Its a pretty awesome clone</p>
        <p>Refferals Accepted</p>
        <p>Nikhil Kumar</p>
      </div>
      <div className=" space-y-4 text-xs text-gray-800 ">
        <h5 className="font-bold">Social&apos;s</h5>
        <p>
          <a href="https://github.com/NiKHiLkr23">Github</a>
        </p>
        <p>
          <a href="https://twitter.com/Nikhil_kr_23">Twitter</a>
        </p>
        <p>
          <a href="https://kumarnikhil.netlify.app/">Portfolio</a>
        </p>
      </div>
      <div className=" space-y-4 text-xs text-gray-800 ">
        <h5 className="font-bold">More Projects</h5>
        <p>
          <a href="https://amazon-clone-dkoclr0qp-nikhilkr23.vercel.app/">
            Amazon Clone
          </a>
        </p>

        <p>
          <a href="https://ai-avatargenerator-production.up.railway.app/">
            Avatar Generator
          </a>
        </p>
        <p>
          <a href="https://ai-image-generator-69bdn0hhj-nikhilkr23.vercel.app/">
            Text-to-Image Generator
          </a>
        </p>
        <p>
          <a href="https://chatbot-v1.vercel.app/">ChatGPT clone</a>
        </p>
      </div>
      <div className=" space-y-4 text-xs text-gray-800 ">
        <h5 className="font-bold">web3 Projects</h5>
        <p>
          <a href="https://getting-started-with-solana-1lwntvk1s-nikhilkr23.vercel.app/">
            Getting Started with Solana
          </a>
        </p>
      </div>
    </div>
  );
}
