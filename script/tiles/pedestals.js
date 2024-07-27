const AbstractPedestalTile = __class__({
	defaultValues: {
		floatingItem: {
			id: 0,
			data: 0,
			extra: null
		}
	},
	networkVisibilityDistance: 48,
	client: {
		load() {
			const self = this;
			this.__networkDataListener = function(networkData, isExternalChange) {
				self.changeNetworkData();
			};
			this.networkData.addOnDataChangedListener(this.__networkDataListener);
			this.describeFloatingItem();
			ClientTileEntity.notifyAdded(this);
		},
		loadFloatingItem() {
			if (this.floatingItem != null) {
				return;
			}
			const animation = new Animation.Item(this.x + 0.5, this.y + 1.25, this.z + 0.5);
			animation.setBlocklightMode();
			let offset = 0;
			animation.loadCustom(function() {
				this.setItemRotation(0, 2 * Math.PI * offset / AbstractPedestalTile.ROTATION_DELTA, 0);
				offset = (offset + 1) % AbstractPedestalTile.ROTATION_DELTA;
			});
			return (this.floatingItem = animation);
		},
		changeNetworkData() {
			this.describeFloatingItem();
		},
		describeFloatingItem() {
			const id = this.networkData.getInt("floatingItemId");
			const data = this.networkData.getInt("floatingItemData");
			if (id == this.floatingItemId && data == this.floatingItemData) {
				return false;
			}
			this.floatingItemId = id;
			this.floatingItemData = data;
			if (id == 0) {
				this.unloadFloatingItem();
				return true;
			}
			this.loadFloatingItem();
			this.floatingItem.describeItem({
				// id: AbstractPedestalTile.getRandomId(),
				id: Network.serverToLocalId(id),
				data: data,
				notRandomize: true
			});
			return true;
		},
		unloadFloatingItem() {
			if (this.floatingItem == null) {
				return;
			}
			this.floatingItem.destroy();
			delete this.floatingItem;
		},
		unload() {
			if (this.__networkDataListener != null) {
				this.networkData.removeOnDataChangedListener(this.__networkDataListener);
				delete this.__networkDataListener;
			}
			ClientTileEntity.notifyRemoved(this);
			this.unloadFloatingItem();
		}
	},
	init() {
		this.data.floatingItem = ModAPI.cloneObject(this.data.floatingItem);
	},
	load() {
		if (this.data.floatingItem == null) {
			this.selfDestroy();
			return;
		}
		this.updateFloatingItem();
	},
	destroy(fromDestroyBlock, isDropAllowed) {
		if (this.data.floatingItem == null || !isDropAllowed) {
			return false;
		}
		this.dropFloatingItem(0, 0, 0);
	},
	dropFloatingItem(dx, dy, dz) {
		const item = this.data.floatingItem;
		if (item.id == null || item.id == 0) {
			return;
		}
		this.blockSource.spawnDroppedItem(
			this.x + 0.5 + dx, this.y + 0.5 + dy, this.z + 0.5 + dz,
			item.id, 1, item.data || 0, item.extra || null
		);
		this.replaceFloatingItem(0, 0, 0, null);
	},
	takeFloatingItem(player) {
		const item = this.data.floatingItem;
		if (item.id == null || item.id == 0 || player == null || player == 0) {
			return;
		}
		if (Game.isItemSpendingAllowed(player)) {
			const actor = new PlayerActor(player);
			actor.addItemToInventory(item.id, 1, item.data || 0, item.extra || null);
		}
		this.replaceFloatingItem(0, 0, 0, null);
	},
	replaceFloatingItem(id, count, data, extra, player) {
		const item = this.data.floatingItem;
		item.id = id;
		item.data = data;
		item.extra = extra;
		if (player == null || player == 0) {
			this.updateFloatingItem();
			return;
		}
		if (Game.isItemSpendingAllowed(player)) {
			const actor = new PlayerActor(player);
			actor.setInventorySlot(actor.getSelectedSlot(), id, count - 1, data, extra);
		}
		this.updateFloatingItem();
	},
	updateFloatingItem() {
		const item = this.data.floatingItem;
		this.networkData.putInt("floatingItemId", item.id || 0);
		this.networkData.putInt("floatingItemData", item.data || 0);
		this.networkData.sendChanges();
	},
	click(id, count, data, coords, player, extra) {
		if (Entity.getSneaking(player)) {
			return false;
		}
		const item = this.data.floatingItem;
		if (item.id != null && item.id != 0) {
			this.takeFloatingItem(player);
			return true;
		}
		this.replaceFloatingItem(id, count, data, extra, player);
		return true;
	}
});

AbstractPedestalTile.ROTATION_DELTA = 130;
