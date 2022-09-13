export function createFooter() {
  const footer = document.querySelector("#footer");

  footer.innerHTML = `<div class="footer-arrow"><a href="#header" rel="noopener" aria-label="to the top of the visit page"><i class="fa-regular fa-circle-up"></i></a></div>
                      <div class="footer-text">
                        <p>© 2007-2022 Heidi Cooks</p>
                        <p>All rights reserved</p>
                        <p>Copying and distribution without the consent of heidicooks.com is prohibited</p>
                      </div>
                      <div class="footer-social">
                        <p>STAY UPDATED</p>
                        <div class="social-icons">
                          <a href="#"><img src="../images/facebook.png" class="icon" /></a>
                          <a href="#"><img src="../images/instagram.png" class="icon" /></a>
                          <a href="#"><img src="../images/pinterest.png" class="icon" /></a>
                          <a href="#"><img src="../images/twitter.png" class="icon" /></a>
                        </div>
                      </div>`;
}
