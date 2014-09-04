Sox manipulation on FileObjects from the CollectionFS package
=========================

This package simply adds `sox` to scope.

If no binaries found on the system it will warn and throw an error if used, again with a fitting description. If you don't know whether graphicsmagick or imagemagick will be installed at the time of running, you can check the `sox.isAvailable` boolean flag before calling `sox()`.

-
> This package was heavily inspired and forked from [Meteor-cfs-graphicsmagick](https://github.com/CollectionFS/Meteor-cfs-graphicsmagick).

> For use with `CollectionFS`, please refer to [the CollectionFS documentation](https://github.com/CollectionFS/Meteor-CollectionFS#image-manipulation) for instructions. This package does not require `CollectionFS` and can be used alone.
=======
Meteor-cfs-sox
==============

