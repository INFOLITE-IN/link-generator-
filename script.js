const app = new Vue({
  el: '#app',
  data: {
    url: '',
    text: '',
    facebookURL: '',
    twitterURL: '',
    linkedinURL: '',
    success: false
  },
  computed: {
    encodedURL() {
      return encodeURIComponent(this.url);
    },
    encodedText() {
      return encodeURIComponent(this.text);
    }
  },
  methods: {
    generateURLs(event) {
      if (event.target.checkValidity()) {
        this.success = true;
        this.facebookURL =  'http://www.facebook.com/sharer/sharer.php?u=' + this.encodedURL + '&title=' + this.encodedText;
        this.twitterURL =  'https://twitter.com/intent/tweet?text=' + this.encodedText + '&url=' + this.encodedURL;
        this.linkedinURL = 'http://www.linkedin.com/shareArticle?mini=true&url=' + this.encodedURL + '&title=' + this.encodedText;
      }
    }
  }
});
