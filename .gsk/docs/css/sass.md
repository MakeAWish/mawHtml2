
Sass & Compass
===============================================================================

Pour tous nos projets, nous utilisons [Sass](http://sass-lang.com) et
[Compass](http://compass-style.org) par défaut.

Configuration:
```json
{
  "css": {
    "engine": "sass",
  }
}
```

Vérifier votre environnement
-------------------------------------------------------------------------------

Sass repose sur [Ruby](https://www.ruby-lang.org/fr/), assurez-vous que vous
l'avez bien installé sur votre environnement.

Il est également nécessaire d'installer l'utilitaire
[Bundler](http://bundler.io/) dans votre environnement global (cela permet
d'avoir plusieurs versions de Sass en fonction de chaque projets).

Si ce n'est pas déjà le cas, exécutez simplement la commande suivante :

```bash
$ sudo gem install bundler
```

Puis, pour être sûr que vous disposer de la dernière version de Sass et Compass
pour le projet sur lequel vous travaillez, exécutez la commande suivante :

```bash
$ bundle install --path .gems
```

En cas de problème de compilation Sass sur un projet existant commencez
toujours par exécuter la commande suivante:

```bash
$ bundle update
```


Configuration standard
-------------------------------------------------------------------------------

Vous pouvez utiliser Sass/Compass de manière traditionnelle, toute la
configuration de l'environnement est centralisé dans le ficher `config.rb`.
Un fichier de configuration près à l'emploie est disponible dans `.gsk/conf`

Pour compiler les styles du projet vers l'environnement de développement,
exécuter simplement la commande suivante :

```bash
$ gulp css
```

Ou bien pour une compilation standalone:

```bash
$ bundle exec compass compile
```

Pour compiler les styles du projet vers l'environnement de production il suffit
de rajouter le paramètre adéquat :

```bash
$ gulp css --optimize
```

Ou bien en standalone

```bash
$ bundle exec compass compile -e production
```
