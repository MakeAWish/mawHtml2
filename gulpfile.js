// Toutes les taches sont externalisées pour permettre une flexibilité et une
// configurabilité maximum.

// Les deux taches les plus utiles sont:
// ----------------------------------------------------------------------------
// $ gulp build   # (compile le site statique pour livraison ou tests)
// $ gulp live    # (Tache de travail avec watcher et serveur statique)

// On trouve également les taches suivantes:
// ----------------------------------------------------------------------------
// $ gulp assets  # (Copie les assets statiques du projet)
// $ gulp connect # (Lance un serveur statique pour voir le projet)
// $ gulp css     # (Compile les CSS du projet)
// $ gulp html    # (Compile les gabarits HTML du projet)
// $ gulp images  # (optimise les images du projet)
// $ gulp js      # (Traite les JS du projet)
// $ gulp watch   # (lance les watcher seuls)


// TASKS
// ----------------------------------------------------------------------------
require('require-dir')('.gsk/tasks');



