/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

 
//  product metafields accordion ///

 const items = document.querySelectorAll(".accordion button");

 function toggleAccordion() {
   const itemToggle = this.getAttribute('aria-expanded');

   for (i = 0; i < items.length; i++) {
     items[i].setAttribute('aria-expanded', 'false');
   }

   if (itemToggle == 'false') {
     this.setAttribute('aria-expanded', 'true');
   }
 }

 items.forEach(item => item.addEventListener('click', toggleAccordion));
