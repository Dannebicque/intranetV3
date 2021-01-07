// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/webpack.config.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/01/2021 14:50

var Encore = require('@symfony/webpack-encore')
var path = require('path')

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev')
}

Encore

  // directory where compiled assets will be stored
  .setOutputPath('public/build/')
  // public path used by the web server to access the output path
  .setPublicPath('/build')
  // only needed for CDN's or sub-directory deploy

  /*
   * ENTRY CONFIG
   *
   * Add 1 entry for each "page" of your app
   * (including one that's included on every page - e.g. "app")
   *
   * Each entry will result in one JavaScript file (e.g. app.js)
   * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
   */
  .addEntry('app', './assets/js/app.js')
  .addEntry('covid', './assets/js/pages/covid.js')
  .addEntry('sadmCovid', './assets/js/pages/sadmCovid.js')
  .addEntry('agenda', './assets/js/pages/agenda.js')
  .addEntry('datatable', './assets/js/datatable.js')
  .addEntry('quill', './assets/js/quill.js')
  .addEntry('trombinoscope', './assets/js/pages/trombinoscope.js')
  .addEntry('absences', './assets/js/pages/absences.js')
  .addEntry('applications', './assets/js/pages/applications.js')
  .addEntry('documents', './assets/js/pages/documents.js')
  .addEntry('profil', './assets/js/pages/profil.js')
  .addEntry('planning', './assets/js/pages/planning.js')
  .addEntry('quizzQualite', './assets/js/pages/quizzQualite.js')
  .addEntry('adm.configuration', './assets/js/pages/adm.configuration.js')
  .addEntry('adm.articles', './assets/js/pages/adm.articles.js')
  .addEntry('adm.quizz', './assets/js/pages/adm.quizz.js')
  .addEntry('adm.groupe', './assets/js/pages/adm.groupe.js')
  .addEntry('adm.edt', './assets/js/pages/adm.edt.js')
  .addEntry('adm.etudiants', './assets/js/pages/adm.etudiants.js')
  .addEntry('adm.personnels', './assets/js/pages/adm.personnels.js')
  .addEntry('sadm.personnels', './assets/js/pages/sadm.personnels.js')
  .addEntry('adm.rattrapages', './assets/js/pages/adm.rattrapages.js')
  .addEntry('adm.previsionnel', './assets/js/pages/adm.previsionnel.js')
  .addEntry('adm.notes', './assets/js/pages/adm.notes.js')
  .addEntry('adm.bornes', './assets/js/pages/adm.borne.js')
  .addEntry('adm.alternances', './assets/js/pages/adm.alternances.js')
  .addEntry('adm.stage_courrier', './assets/js/pages/adm.stage_courrier.js')
  .addEntry('adm.etudiant_groupe', './assets/js/pages/adm.etudiant_groupe.js')
  .addEntry('adm.justificatifs', './assets/js/pages/adm.justificatifs.js')
  .addEntry('adm.absences', './assets/js/pages/adm.absences.js')
  .addEntry('adm.matieres', './assets/js/pages/adm.matieres.js')
  .addEntry('adm.scolarite', './assets/js/pages/adm.scolarite.js')
  .addEntry('adm.stage', './assets/js/pages/adm.stage.js')
  .addEntry('creneaux', './assets/js/pages/creneaux.js')
  .addEntry('progression', './assets/js/pages/progression.js')
  .addEntry('settings', './assets/js/pages/settings.js')
  .addEntry('notes', './assets/js/pages/notes.js')
  .addEntry('informations', './assets/js/pages/informations.js')
  .addEntry('scolarite', './assets/js/pages/scolarite.js')
  .addEntry('sadm.scolarite', './assets/js/pages/sadm.scolarite.js')
  .addEntry('sadm.enquete', './assets/js/pages/sadm.enquete.js')
  .addEntry('sadm.anneeuniversitaire', './assets/js/pages/sadm.anneeuniversitaire.js')
  .addEntry('adm.reservation.materiel_commun', './assets/js/pages/adm.reservation.materiel_commun.js')


  // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
  .splitEntryChunks()

  // will require an extra script tag for runtime.js
  // but, you probably want this, unless you're building a single-page app
  .enableSingleRuntimeChunk()

  /*
   * FEATURE CONFIG
   *
   * Enable & configure other features below. For a full
   * list of features, see:
   * https://symfony.com/doc/current/frontend.html#adding-more-features
   */
  .cleanupOutputBeforeBuild()
  .enableBuildNotifications()
  .enableSourceMaps(!Encore.isProduction())
  // enables hashed filenames (e.g. app.abc123.css)
  .enableVersioning(Encore.isProduction())

  // enables @babel/preset-env polyfills
  .configureBabelPresetEnv((config) => {
    config.useBuiltIns = 'usage'
    config.corejs = 3
  })

  // enables Sass/SCSS support
  .enableSassLoader()
  .enableStimulusBridge(
    './assets/controllers.json'
  )
  // uncomment if you're having problems with a jQuery plugin
  .autoProvidejQuery()
  .configureBabel(function (babelConfig) {
    // add additional presets
    //babelConfig.presets.push('@babel/preset-es2015');

    // no plugins are added by default, but you can add some
    //babelConfig.plugins.push('styled-jsx/babel');
  }, {})
  .disableImagesLoader()
  .addRule({
    test: /\.(svg|png|jpg|jpeg|gif|ico)/,
    exclude: /node_modules\/quill\/assets\/icons\/(.*)\.svg$/,
    use: [{
      loader: 'file-loader',
      options: {
        filename: 'images/[name].[hash:8].[ext]',
        publicPath: '/build/'
      }
    }]
  })
  .addLoader(
    {
      test: /\.svg$/,
      use: [{
        loader: 'html-loader',
        options: {
          minimize: true
        }
      }]
    }
  )
  .addLoader({
    test: /\.ts$/,
    use: [{
      loader: 'ts-loader',
      options: {
        compilerOptions: {
          declaration: false,
          target: 'es5',
          module: 'commonjs'
        },
        transpileOnly: true
      }
    }]
  })

config = Encore.getWebpackConfig()

config.resolve.alias = {
  'parchment': path.resolve(__dirname, 'node_modules/parchment/src/parchment.ts'),
  'quill$': path.resolve(__dirname, 'node_modules/quill/quill.js')
}
config.resolve.extensions = ['.js', '.ts', '.svg']

module.exports = config
