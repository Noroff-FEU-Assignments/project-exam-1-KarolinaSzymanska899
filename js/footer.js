export function createFooter() {
  const footer = document.querySelector("#footer");

  footer.innerHTML = `<div class="footer-text">
                        <p>© 2007-2022 Heidi Cooks</p>
                        <p>All rights reserved</p>
                        <p>Copying and distribution without the consent of heidicooks.com is prohibited</p>
                      </div>
                      <div>
                        <p>STAY UPDATED</p>
                        <div class="footer-social">
                          <a href="#"><img src="../images/facebook.png" /></a>
                          <a href="#"><img src="../images/instagram.png" /></a>
                          <a href="#"><img src="../images/pinterest.png" /></a>
                          <a href="#"><img src="../images/twitter.png" /></a>
                        </div>
                      </div>`;
}
