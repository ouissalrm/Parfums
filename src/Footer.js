

import Products from './Products'

const Footer = () => {
    const date = new Date()
   
  return (
   <footer>
    <div className='footer'>
    <div className='About'>
        <h3>À propos de nous </h3>
        <p>Chez Wissal Parfums, nous croyons que chaque parfum raconte une histoire.
Nos créations allient élégance, authenticité et passion pour vous offrir des fragrances uniques qui subliment votre personnalité.
Découvrez l’art du parfum à travers nos collections raffinées, conçues avec amour et délicatesse</p>
        </div> 
    <div className='linkss'>
        <h3>Links</h3>
        <p>Home</p>
         <p>Products</p>
          <p>About</p>
           <p>Shop</p>

        </div> 
     <div className='contacts'>
       <h3> Follow Us</h3>
<button>
<i class="fa-brands fa-linkedin"></i> Linkedin
</button>
<button>
<i class="fa-brands fa-instagram"></i> Instagram
</button><br></br>
<button>
<i class="fa-brands fa-github"></i> Github
</button>
<button>
<i class="fa-brands fa-instagram"></i> Instagram
</button><br></br>
<button>
<i class="fa-brands fa-whatsapp"></i> Whatsapp
</button>



        </div> 
    </div>

    <div className='cpoyright'>
        <p>&copy;{date.getFullYear()} parfums. Tous droits réservés. </p>

    </div>
   </footer>
  )
}

export default Footer
