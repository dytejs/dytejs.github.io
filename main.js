window.$docsify = {
  name: 'DyteJs',
  loadSidebar: true,
  loadNavbar: true,
  coverpage: true,
  search: 'auto',
  subMaxLevel: 3,
  homepage: 'home.md',
  repo: 'https://github.com/dytejs/dytejs',
  themeColor: '#292F33',
  plugins: [
              function(hook) {
      var footer = [
                  '<hr/>',
                  '<footer>',
                  '<span><a href="https://github.com/DyteJs">DyteJs</a> &copy;2021-' + new Date().getFullYear() + '.</span>',
                  '<span>Made with ❤️ By <a href="https://github.com/tobithedev" target="_blank">TøBiTheDev</a> and <a href="https://github.com/dytejs" target="blank_">DyteJs Team</a>.</span>',
                  '</footer>'
                ].join('');
  
      hook.afterEach(function(html) {
        return html + footer;
      });
              },
              function(hook, vm) {
      hook.beforeEach(function(html) {
        var url =
          'https://github.com/dytejs/dytejs.github.io/docs/blob/master/docs/' +
          vm.route.file;
        var editHtml = '[📝 EDIT DOCUMENT](' + url + ')\n';
  
        return (
          editHtml +
          html
        );
      });
              }
            ]
}