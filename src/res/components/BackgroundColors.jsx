import React, { Fragment } from "react";

// list of background-colors style to not purge postcss
// const colors = [
//   "bg-platinum-D1",
//   "bg-platinum-D2",
//   "bg-platinum-D3",
//   "bg-platinum-D4",
//   "bg-platinum-D5",
//   "bg-platinum-D6",
//   "bg-platinum-D7",
//   "bg-platinum-D8",
//   "bg-platinum-D9",
//   "bg-platinum-D10",

//   "bg-platinum-L1",
//   "bg-platinum-L2",
//   "bg-platinum-L3",
//   "bg-platinum-L4",
//   "bg-platinum-L5",
//   "bg-platinum-L6",
//   "bg-platinum-L7",
//   "bg-platinum-L8",
//   "bg-platinum-L9",
//   "bg-platinum-L10",

//   "bg-emerald-D1",
//   "bg-emerald-D2",
//   "bg-emerald-D3",
//   "bg-emerald-D4",
//   "bg-emerald-D5",
//   "bg-emerald-D6",
//   "bg-emerald-D7",
//   "bg-emerald-D8",
//   "bg-emerald-D9",
//   "bg-emerald-D10",

//   "bg-emerald-L1",
//   "bg-emerald-L2",
//   "bg-emerald-L3",
//   "bg-emerald-L4",
//   "bg-emerald-L5",
//   "bg-emerald-L6",
//   "bg-emerald-L7",
//   "bg-emerald-L8",
//   "bg-emerald-L9",
//   "bg-emerald-L10",

//   "bg-ruby-D1",
//   "bg-ruby-D2",
//   "bg-ruby-D3",
//   "bg-ruby-D4",
//   "bg-ruby-D5",
//   "bg-ruby-D6",
//   "bg-ruby-D7",
//   "bg-ruby-D8",
//   "bg-ruby-D9",
//   "bg-ruby-D10",

//   "bg-ruby-L1",
//   "bg-ruby-L2",
//   "bg-ruby-L3",
//   "bg-ruby-L4",
//   "bg-ruby-L5",
//   "bg-ruby-L6",
//   "bg-ruby-L7",
//   "bg-ruby-L8",
//   "bg-ruby-L9",
//   "bg-ruby-L10",

//   "bg-citrine-D1",
//   "bg-citrine-D2",
//   "bg-citrine-D3",
//   "bg-citrine-D4",
//   "bg-citrine-D5",
//   "bg-citrine-D6",
//   "bg-citrine-D7",
//   "bg-citrine-D8",
//   "bg-citrine-D9",
//   "bg-citrine-D10",

//   "bg-citrine-L1",
//   "bg-citrine-L2",
//   "bg-citrine-L3",
//   "bg-citrine-L4",
//   "bg-citrine-L5",
//   "bg-citrine-L6",
//   "bg-citrine-L7",
//   "bg-citrine-L8",
//   "bg-citrine-L9",
//   "bg-citrine-L10",

//   "bg-amethyst-D1",
//   "bg-amethyst-D2",
//   "bg-amethyst-D3",
//   "bg-amethyst-D4",
//   "bg-amethyst-D5",
//   "bg-amethyst-D6",
//   "bg-amethyst-D7",
//   "bg-amethyst-D8",
//   "bg-amethyst-D9",
//   "bg-amethyst-D10",

//   "bg-amethyst-L1",
//   "bg-amethyst-L2",
//   "bg-amethyst-L3",
//   "bg-amethyst-L4",
//   "bg-amethyst-L5",
//   "bg-amethyst-L6",
//   "bg-amethyst-L7",
//   "bg-amethyst-L8",
//   "bg-amethyst-L9",
//   "bg-amethyst-L10",

//   "bg-kyanite-D1",
//   "bg-kyanite-D2",
//   "bg-kyanite-D3",
//   "bg-kyanite-D4",
//   "bg-kyanite-D5",
//   "bg-kyanite-D6",
//   "bg-kyanite-D7",
//   "bg-kyanite-D8",
//   "bg-kyanite-D9",
//   "bg-kyanite-D10",

//   "bg-kyanite-L1",
//   "bg-kyanite-L2",
//   "bg-kyanite-L3",
//   "bg-kyanite-L4",
//   "bg-kyanite-L5",
//   "bg-kyanite-L6",
//   "bg-kyanite-L7",
//   "bg-kyanite-L8",
//   "bg-kyanite-L9",
//   "bg-kyanite-L10",

//   "bg-obsidian-D1",
//   "bg-obsidian-D2",
//   "bg-obsidian-D3",
//   "bg-obsidian-D4",
//   "bg-obsidian-D5",
//   "bg-obsidian-D6",
//   "bg-obsidian-D7",
//   "bg-obsidian-D8",
//   "bg-obsidian-D9",
//   "bg-obsidian-D10",

//   "bg-obsidian-L1",
//   "bg-obsidian-L2",
//   "bg-obsidian-L3",
//   "bg-obsidian-L4",
//   "bg-obsidian-L5",
//   "bg-obsidian-L6",
//   "bg-obsidian-L7",
//   "bg-obsidian-L8",
//   "bg-obsidian-L9",
//   "bg-obsidian-L10",

//   "bg-sapphire-D1",
//   "bg-sapphire-D2",
//   "bg-sapphire-D3",
//   "bg-sapphire-D4",
//   "bg-sapphire-D5",
//   "bg-sapphire-D6",
//   "bg-sapphire-D7",
//   "bg-sapphire-D8",
//   "bg-sapphire-D9",
//   "bg-sapphire-D10",

//   "bg-sapphire-L1",
//   "bg-sapphire-L2",
//   "bg-sapphire-L3",
//   "bg-sapphire-L4",
//   "bg-sapphire-L5",
//   "bg-sapphire-L6",
//   "bg-sapphire-L7",
//   "bg-sapphire-L8",
//   "bg-sapphire-L9",
//   "bg-sapphire-L10",
// ];

const BackgroundColor = ({ childrenName, childrenCount }) => {
  const boxes = [...Array(childrenCount)].map((box, i) => (
    <div className={`${childrenName}${i + 1}`} key={i} />
  ));
  return <div className="background-colors__boxes-container">{boxes}</div>;
};

const BackgroundColors = () => {
  return (
    <div className="background-colors">
      <h2 className="background-colors__title">Possible Color Palletes</h2>
      <div className="background-colors__container">
        <div>
          <h3>Platinum</h3>
          <div>
            <BackgroundColor
              childrenName="background-colors__boxes bg-platinum-D"
              childrenCount={10}
            />
            <BackgroundColor
              childrenName="background-colors__boxes bg-platinum-L"
              childrenCount={10}
            />
          </div>
        </div>
        <div>
          <h3>Citrine</h3>
          <div>
            <BackgroundColor
              childrenName="background-colors__boxes bg-citrine-D"
              childrenCount={10}
            />
            <BackgroundColor
              childrenName="background-colors__boxes bg-citrine-L"
              childrenCount={10}
            />
          </div>
        </div>

        <div>
          <h3>Emerald</h3>
          <div>
            <BackgroundColor
              childrenName="background-colors__boxes bg-emerald-D"
              childrenCount={10}
            />

            <BackgroundColor
              childrenName="background-colors__boxes bg-emerald-L"
              childrenCount={10}
            />
          </div>
        </div>
        <div>
          <h3>Ruby</h3>
          <div>
            <BackgroundColor
              childrenName="background-colors__boxes bg-ruby-D"
              childrenCount={10}
            />

            <BackgroundColor
              childrenName="background-colors__boxes bg-ruby-L"
              childrenCount={10}
            />
          </div>
        </div>

        <div>
          <h3>Amethyst</h3>
          <div>
            <BackgroundColor
              childrenName="background-colors__boxes bg-amethyst-D"
              childrenCount={10}
            />

            <BackgroundColor
              childrenName="background-colors__boxes bg-amethyst-L"
              childrenCount={10}
            />
          </div>
        </div>

        <div>
          <h3>Kyanite</h3>
          <div>
            <BackgroundColor
              childrenName="background-colors__boxes bg-kyanite-D"
              childrenCount={10}
            />

            <BackgroundColor
              childrenName="background-colors__boxes bg-kyanite-L"
              childrenCount={10}
            />
          </div>
        </div>

        <div>
          <h3>Sapphire</h3>
          <div>
            <BackgroundColor
              childrenName="background-colors__boxes bg-sapphire-D"
              childrenCount={10}
            />

            <BackgroundColor
              childrenName="background-colors__boxes bg-sapphire-L"
              childrenCount={10}
            />
          </div>
        </div>
        <div>
          <h3>Obsidian</h3>
          <div>
            <BackgroundColor
              childrenName="background-colors__boxes bg-obsidian-D"
              childrenCount={10}
            />

            <BackgroundColor
              childrenName="background-colors__boxes bg-obsidian-L"
              childrenCount={10}
            />
          </div>
        </div>

      </div>
    </div>
  );
};
export default BackgroundColors;
