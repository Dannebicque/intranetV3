// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/webpack.config.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 16/02/2024 08:50

const Encore = require('@symfony/webpack-encore')
const path = require('path')
const FosRouting = require('fos-router/webpack/FosRouting');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
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
  .copyFiles({
    from: 'node_modules/tinymce/skins',
    to: 'skins/[path]/[name].[ext]',
  })
  /*
   * ENTRY CONFIG
   *
   * Add 1 entry for each "page" of your app
   * (including one that's included on every page - e.g. "app")
   *
   * Each entry will result in one JavaScript file (e.g. app.js)
   * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
   */
  .addEntry('app', './assets/app.js')
  .addEntry('borne', './assets/js/pages/borne.js')
  .addEntry('tinyMce', './assets/js/tinyMce.js')
  .addEntry('apc', './assets/js/pages/apc.js')
  .addEntry('agenda', './assets/js/pages/agenda.js')
  .addEntry('applications', './assets/js/pages/applications.js')
  .addEntry('profil', './assets/js/pages/profil.js')
  .addEntry('adm.configuration', './assets/js/pages/adm.configuration.js')
  .addEntry('adm.groupe', './assets/js/pages/adm.groupe.js')
  .addEntry('adm.edt', './assets/js/pages/adm.edt.js')
  .addEntry('adm.etudiants', './assets/js/pages/adm.etudiants.js')
  .addEntry('adm.apcCoefficients', './assets/js/pages/adm.apcCoefficients.js')
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
  .addEntry('adm.sous-commission', './assets/js/pages/adm.sous-commission.js')
  .addEntry('adm.stage', './assets/js/pages/adm.stage.js')
  .addEntry('adm.qualite', './assets/js/pages/adm.qualite.js')
  .addEntry('settings', './assets/js/pages/settings.js')
  .addEntry('notes', './assets/js/pages/notes.js')
  .addEntry('scolarite', './assets/js/pages/scolarite.js')
  .addEntry('sadm.scolarite', './assets/js/pages/sadm.scolarite.js')
  .addEntry('sadm.enquete', './assets/js/pages/sadm.enquete.js')
  .addEntry('sadm.originaux', './assets/js/pages/sadm.originaux.js')
  .addEntry('sadm.anneeuniversitaire', './assets/js/pages/sadm.anneeuniversitaire.js')
  .addEntry('adm.reservation.materiel_commun', './assets/js/pages/adm.reservation.materiel_commun.js')

  .enableStimulusBridge('./assets/controllers.json')

  // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
  .splitEntryChunks()

  // will require an extra script tag for runtime.js
  // but, you probably want this, unless you're building a single-page app
  .enableSingleRuntimeChunk()

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
  .addPlugin(new FosRouting())
  .enableSassLoader()

  .autoProvidejQuery()
  .configureBabel((babelConfig) => {
  }, {})
// optimisations

if (!Encore.isProduction()) {
  Encore.addPlugin(
    new BundleAnalyzerPlugin({
      /* Can be `server`, `static` or `disabled`. */
      /* In `server` mode analyzer will start HTTP server to show bundle report. */
      /* In `static` mode single HTML file with bundle report will be generated. */
      /* In `disabled` mode you can use this plugin to just generate Webpack Stats JSON file by setting `generateStatsFile` to `true`. */
      analyzerMode: 'server',
      /* Host that will be used in `server` mode to start HTTP server. */
      analyzerHost: '127.0.0.1',
      /* Port that will be used in `server` mode to start HTTP server. */
      analyzerPort: 3002,
      /* Path to bundle report file that will be generated in `static` mode. */
      /* Relative to bundles output directory. */
      reportFilename: 'report.html',
      /* Module sizes to show in report by default. */
      /* Should be one of `stat`, `parsed` or `gzip`. */
      /* See "Definitions" section for more information. */
      defaultSizes: 'parsed',
      /* Automatically open report in default browser */
      openAnalyzer: true,
      /* If `true`, Webpack Stats JSON file will be generated in bundles output directory */
      generateStatsFile: false,
      /* Name of Webpack Stats JSON file that will be generated if `generateStatsFile` is `true`. */
      /* Relative to bundles output directory. */
      statsFilename: 'stats.json',
      /* Options for `stats.toJson()` method. */
      /* For example you can exclude sources of your modules from stats file with `source: false` option.
      /* See more options here: https://github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21 */
      statsOptions: null,
      /* Log level. Can be 'info', 'warn', 'error' or 'silent'. */
      logLevel: 'info',
    }),
  )
}

config = Encore.getWebpackConfig()
config.resolve.extensions = ['.js', '.ts', '.svg']

module.exports = config
