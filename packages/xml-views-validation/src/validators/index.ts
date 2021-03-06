import { UI5Validators } from "../validate-xml-views";
import { validateUnknownEnumValue } from "./attributes/unknown-enum-value";
import { validateUnknownXmlnsNamespace } from "./attributes/unknown-xmlns-namespace";
import { validateBooleanValue } from "./attributes/invalid-boolean-value";
import { validateUseOfDeprecatedClass } from "./elements/use-of-deprecated-class";
import { validateUseOfDeprecatedAggregation } from "./elements/use-of-depracated-aggregation";
import { validateUseOfDeprecatedAttribute } from "./attributes/use-of-depracated-attribute";
import { validateNonUniqueID } from "./document/non-unique-id";
import { validateUnknownAttributeKey } from "./attributes/unknown-attribute-key";
import { validateUnknownTagName } from "./elements/unknown-tag-name";
import { validateExplicitAggregationCardinality } from "./elements/cardinality-of-aggregation";
import { validateAggregationType } from "./elements/type-of-aggregation";

export const allValidators: UI5Validators = {
  document: [validateNonUniqueID],
  element: [
    validateUseOfDeprecatedClass,
    validateUseOfDeprecatedAggregation,
    validateUnknownTagName,
    validateExplicitAggregationCardinality,
    validateAggregationType,
  ],
  attribute: [
    validateUnknownEnumValue,
    validateUnknownXmlnsNamespace,
    validateBooleanValue,
    validateUnknownAttributeKey,
    validateUseOfDeprecatedAttribute,
  ],
};
