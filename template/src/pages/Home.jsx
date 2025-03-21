import React from 'react'
import { FiPlus } from "react-icons/fi";
import TopNav from '../components/TopNav';
const Tags = [
  "Arts", "Podcast", "Music", "Games", "Writing",
  "Photography", "Video", "YouTube", "Twitch", "Facebook"
]

const Creators = [
  {
    picture: "https://kirbyandtheforgottenland.nintendo.com/assets/images/characters/character-bandana.png",
    name: "Erika Lancaster",
    description: "Writing Music for Dreamers"
  },
  {
    picture: "https://static.wikia.nocookie.net/nintendo/images/a/a9/Waddle_Dee_Forgotten_Land.png/revision/latest/smart/width/250/height/250?cb=20220823174009&path-prefix=en",
    name: "Dread Maps",
    description: "Animated for Web Design"
  },
  {
    picture: "https://kirbyandtheforgottenland.nintendo.com/assets/images/characters/character-kirby.png",
    name: "Mage Hand Press",
    description: "Full Stack Deverloper Content / Podcast"
  },
  {
    picture: "https://pm1.aminoapps.com/6229/b2164f53dba3f80472325bdc8bcd2fedfd68f64e_00.jpg",
    name: "Holo Grounds",
    description: "Creating Printable Miniatures"
  },
  {
    picture: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/krtdld_meta_knight.png",
    name: "Walades Studio",
    description: "3d visual Print Models"
  },
  {
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiXrIcNSXUMjIL1qNVOB8SPny3Rkv5pkxA6Q&s",
    name: "Heroes Infinite",
    description: "Creating Mobile Games and Podcast"
  },
  {
    picture: "https://static.wikitide.net/greatcharacterswiki/thumb/a/a8/KSA_Susie_Artwork.png/300px-KSA_Susie_Artwork.png",
    name: "Realm Juls",
    description: "Content Editor / Videographer"
  },
]

const Home = () => {
  return (
    <div className='flex-wrap px-10'>
      <TopNav />
      <div className='flex w-1/2 items-center flex-wrap gap-1.5 px-5'>
        {
          Tags.map((categories, index) => (
            <p key={index} className="w-fit px-5 py-2 bg-gray-200 border border-gray-300 rounded-full text-sm font-medium">{categories}</p>
          ))
        }
      </div>

      <div className="mt-3 space-y-5 px-5 border ">
        <h1 className="font-semibold text-xl">Suggested Creators</h1>

        <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {Creators.map((creator, index) => (
            <div key={index} className="border w-64 h-auto rounded-3xl overflow-hidden relative hover:shadow-2xl transition-all delay-75 ease-out">
              <FiPlus className='absolute top-5 right-6 rounded-full text-2xl bg-white cursor-pointer' />
              <img 
                src={creator.picture} 
                alt={creator.name} 
                className="w-full h-52 object-cover"
              />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-3">
                <h1 className="text-lg font-semibold">{creator.name}</h1>
                <p className="text-xs">{creator.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Home