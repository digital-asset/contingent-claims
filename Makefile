.PHONY: build
build: clean install
	daml build

.PHONY: build-dev
build-dev: install
	cd test && daml build

.PHONY: install
install:
	./scripts/get-dependencies.sh daml.yaml

.PHONY: clean
clean:
	daml clean
	./scripts/remove-dependencies.sh daml.yaml
	rm -fr .docs/

.PHONY: test
test: install
	cd test && daml test

DAML_SRC:=$(shell find daml/ContingentClaims -name '*.daml')

.PHONY: doc
doc: $(DAML_SRC)
	daml damlc docs --format html \
    --exclude-instances=HasField \
    --drop-orphan-instances \
    --output .docs $(DAML_SRC)

.PHONY: publish-api-doc
publish-api-doc:
	./scripts/publish-api-doc.sh