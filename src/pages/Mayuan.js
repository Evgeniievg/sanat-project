import React from 'react'
import './article.css'
import maYuanFirst from '../assets/ma-yuan.jpg';
import maYuanScientist from '../assets/ma-yuan__scientist.png';
import maYuanFisherman from '../assets/ma-yuan__fisherman.png';
import maYuanWildlife from '../assets/ma-yuan__wildlife.png';
import maYuanDances from '../assets/ma-yuan__dances.png';





function Mayuan() {
  return (
    <div className='article'>
      <h2 className='article__title'>Ma Yuan</h2>
      <p className='article__text'>Ma Yuan (1160-1225 AD) was a Chinese painter who worked during the Sung Dynasty. Born into a family of famous artists, Ma Yuan was able to not only inherit the pictorial traditions of his ancestors, but also make a significant contribution to the development of Chinese painting. Ma Yuan lived during a time of great upheaval: in 1127, he was forced to move to Lin'an (Hangzhou) with the Imperial Court and the Academy of Painting because the Jurchen (a people who lived in X-XV century in northeast China) had captured the northern part of the country and the capital of Kaifeng as a result of a series of prolonged wars. From now on, the theme of nostalgia and longing for the past life was traced in all his works.</p>
      <p className='article__text'>Despite the fact that the figure of a person is rarely seen in the artist's work, the lyricism of the plot is quite clear. In terms of lyricism, Ma Yuan's painting can be compared to Sung poetry.</p>
      <div className='image__container'>
        <img src={maYuanFirst} className='article__image'/>
        <span className='image__subtext'>Spring Walk on the Mountain Path (山徑春行) (Imperial Palace Museum, Taiwan)</span>
      </div>
      <p className='article__text'>In Ma Yuan's works, great importance was attached to the person and his feelings. In the artist's pictorial compositions, the viewer will not find a reflection of the former majesty and grandeur of the Under heaven with its high mountains and flowing rivers, but will feel the sadness and melancholy that pervaded the artist's life and work.</p>
      <p className='article__text'>The landscape motifs used by the artist conveyed the inner state of the lyrical hero. One of the frequent motifs in Ma Yuan's works was the unity of man and nature, which is evident, in particular, in the painting "Scholar with his servant on a mountain terrace".</p>
      <div className='image__container'>
        <img src={maYuanScientist} className='article__image'/>
        <span className='image__subtext'>Scholar with His Servant on a Mountain Terrace (松溪观鹿图) (New York)</span>
      </div>
      <div className='image__container'>
        <img src={maYuanFisherman} className='article__image'/>
        <span className='image__subtext'>Lone Fisherman on the Frozen River (寒江独钩图) (National Museum, Tokyo)</span>
      </div>
      <p className='article__text'>Ma Yuan was known as "Ma of One Corner" because his favorite compositional technique was to concentrate the image in one corner, leaving the majority of the painting empty, allowing the viewer to imagine the scene. He used a lot of "air" to create a mysterious and appealing atmosphere. The foreground in Ma Yuan's paintings is more open than in previous eras, allowing the viewer to "enter" the painting and feel close to the lyrical hero. In depicting rock textures, Ma Yuan often used the "splitting of a big ax" technique, which is clearly visible in "Dance and Song". Ma Yuan and his contemporary Xia Gui were considered a new milestone in the development of national painting during their lifetime and their style was later named Ma-Xia.</p>
      <div className='image__container'>
        <img src={maYuanWildlife} className='article__image'/>
        <span className='image__subtext'>Wild Plums, Stones, Creek, and Ducks (梅石溪凫图) (Gugun Museum, Beijing)</span>
      </div>
      <p className='article__text'>Yes, Ma Yuan was known to use the "big axe hack" (大斧劈) technique to create the texture of rocks in his landscapes. This technique involves using thick, bold brush strokes diagonally across the canvas to create the rugged texture of stone surfaces. This technique can be seen in works such as "Dancing and Singing".</p>
      <div className='image__container'>
        <img src={maYuanDances} className='article__image'/>
        <span className='image__subtext'>Dancing and Singing (踏歌图)(National Museum of History, Beijing)</span>
      </div>
      <p className='article__text'>Ma Yuan and his contemporary Xie Gui were regarded as the new wave in the development of Chinese painting during their lifetime. Later, their style became known as Ma-Xie (named after Ma Yuan and Xie Gui).</p>
    </div>
  )
}

export default Mayuan
