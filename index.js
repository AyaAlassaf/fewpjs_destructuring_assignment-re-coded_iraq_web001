const farmAnimals = 'cow horse sheep pig chicken'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const muppet = {
  name: 'Kermit',
  color: 'green',
  song: 'The Rainbow Connection',
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};

const k_muppet = {
  k_name: 'Kermit',
  k_color: 'green',
  k_album: {
    the_muppet_movie: {
      song_1: 'Rainbow Connection',
      song_2: 'Moving Right Along',
      song_3: 'Never Before, Never Again',
      song_4: 'I Hope That Something Better Comes Along',
    },
  },
  k_job: 'Host of The Muppet Show',
  k_partner: 'Miss Piggy'
};



  const [moo, neigh,baa,oink, chacack] = 'cow horse sheep pig chicken'.split(' ')
  console.log(moo, neigh,baa,oink, chacack)

const [Bessie, ,Dolly,Babe, Little] = 'cow horse sheep pig chicken'.split(' ')
console.log(Bessie,Dolly,Babe, Little)

const [black_and_white, ,black,pink,] = 'cow horse sheep pig chicken'.split(' ')
console.log(black_and_white,black,pink)




const [red, orange, yellow, green, blue, indigo, violet]=console.log(red, orange, yellow, green, blue, indigo, violet)


const [r, o, y, g, b, , v]=console.log(r, o, y, g, b,v)


const [, , , , , indg, ]=console.log( indg)




const { names, color, song, job, partner} = muppet




const {song_2 ,song_4} = k_muppet.k_album.the_muppet_movie
const {k_job,k_partner}=k_muppet
