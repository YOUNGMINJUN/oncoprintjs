// Feed this in as 

// Default grey
var DEFAULT_GREY = "rgba(190, 190, 190, 1)";

// Mutation colors
var MUT_COLOR_MISSENSE = '#008000';
var MUT_COLOR_MISSENSE_PASSENGER = '#53D400';
var MUT_COLOR_INFRAME = '#993404';
var MUT_COLOR_INFRAME_PASSENGER = '#fe9929';
var MUT_COLOR_TRUNC = '#000000';
var MUT_COLOR_TRUNC_PASSENGER = '#708090';
var MUT_COLOR_FUSION = '#8B00C9';
var MUT_COLOR_PROMOTER = '#FFA942';
var MUT_COLOR_GERMLINE = '#FFFFFF';

var PROT_COLOR_UP = "#9224A6";
var PROT_COLOR_DOWN = "#00BCD4";

// Base mutation rule set parameters
var baseRuleSetParams = {
    'type': 'gene',
    'legend_label': 'Genetic Alteration',
    'legend_base_color': DEFAULT_GREY
};
var non_mutation_rule_params = {
    // Default: gray rectangle
    '*': {
	shapes: [{
		'type': 'rectangle',
		'fill': DEFAULT_GREY,
		'z': 1
	    }],
        legend_label: 'No alterations',
    },
    // Copy number alteration
    'disp_cna': {
	// Red rectangle for amplification
	'amp': {
	    shapes: [{
		    'type': 'rectangle',
		    'fill': 'rgba(255,0,0,1)',
		    'x': '0%',
		    'y': '0%',
		    'width': '100%',
		    'height': '100%',
		    'z': 2,
		}],
	    legend_label: 'Amplification',
	},
	// Light red rectangle for gain
	'gain': {
	    shapes: [{
		    'type': 'rectangle',
		    'fill': 'rgba(255,182,193,1)',
		    'x': '0%',
		    'y': '0%',
		    'width': '100%',
		    'height': '100%',
		    'z': 2,
		}],
	    legend_label: 'Gain',
	},
	// Blue rectangle for deep deletion 
	'homdel': {
	    shapes: [{
		    'type': 'rectangle',
		    'fill': 'rgba(0,0,255,1)',
		    'x': '0%',
		    'y': '0%',
		    'width': '100%',
		    'height': '100%',
		    'z': 2,
		}],
	    legend_label: 'Deep Deletion',
	},
	// Light blue rectangle for shallow deletion
	'hetloss': {
	    shapes: [{
		    'type': 'rectangle',
		    'fill': 'rgba(143, 216, 216,1)',
		    'x': '0%',
		    'y': '0%',
		    'width': '100%',
		    'height': '100%',
		    'z': 2,
		}],
	    legend_label: 'Shallow Deletion',
	}
    },
    // mRNA regulation
    'disp_mrna': {
	// Light red outline for upregulation
	'up': {
	    shapes: [{
		    'type': 'rectangle',
		    'fill': 'rgba(0, 0, 0, 0)',
		    'stroke': 'rgba(255, 153, 153, 1)',
		    'stroke-width': '2',
		    'x': '0%',
		    'y': '0%',
		    'width': '100%',
		    'height': '100%',
		    'z': 3,
		}],
	    legend_label: 'mRNA Upregulation',
	},
	// Light blue outline for downregulation
	'down': {
	    shapes: [{
		    'type': 'rectangle',
		    'fill': 'rgba(0, 0, 0, 0)',
		    'stroke': 'rgba(102, 153, 204, 1)',
		    'stroke-width': '2',
		    'x': '0%',
		    'y': '0%',
		    'width': '100%',
		    'height': '100%',
		    'z': 3,
		}],
	    legend_label: 'mRNA Downregulation',
	},
    },
    // protein expression regulation
    'disp_prot': {
	// small top rectangle for upregulated
	'up': {
	    shapes: [{
		    'type': 'rectangle',
                    'fill': PROT_COLOR_UP,
                    'x':"0%",
                    'y':"0%",
                    'width':"100%",
                    'height':"20%",
		    'z': 4,
		}],
	    legend_label: 'Protein Upregulation',
	},
	// small bottom rectangle for upregulated
	'down': {
	    shapes: [{
		    'type': 'rectangle',
                    'fill': PROT_COLOR_DOWN,
                    'x':"0%",
                    'y':"80%",
                    'width':"100%",
                    'height':"20%",
		    'z': 4,
		}],
	    legend_label: 'Protein Downregulation',
	}
    },
    // fusion
    'disp_fusion': {
	// tall inset purple rectangle for fusion
	'true': {
	    shapes: [{
			'type': 'rectangle',
			'fill': MUT_COLOR_FUSION,
			'x': '0%',
			'y': '20%',
			'width': '100%',
			'height': '60%',
			'z': 5
		    }],
		legend_label: 'Fusion'
	}
    },
    // germline
    'disp_germ': {
        // white stripe in the middle
        'true': {
            shapes: [{
                'type': 'rectangle',
                'fill': MUT_COLOR_GERMLINE,
                'x': '0%',
                'y': '46%',
                'width': '100%',
                'height': '8%',
                'z': 7
            }],
            legend_label: 'Germline Mutation'
        }
    }
};

window.geneticrules = {};
window.geneticrules.genetic_rule_set_same_color_for_all_no_recurrence = $.extend({}, baseRuleSetParams, {
    'rule_params': $.extend({}, non_mutation_rule_params, {
	'disp_mut': {
	    'trunc,inframe,missense,promoter,trunc_rec,inframe_rec,missense_rec,promoter_rec': {
		shapes: [{
			'type': 'rectangle',
			'fill': MUT_COLOR_MISSENSE,
			'x': '0%',
			'y': '33.33%',
			'width': '100%',
			'height': '33.33%',
			'z': 6
		}],
		legend_label: 'Mutation'
	    }
	}
    })
});
window.geneticrules.genetic_rule_set_same_color_for_all_recurrence = $.extend({}, baseRuleSetParams, {
    'rule_params': $.extend({}, non_mutation_rule_params, {
	'disp_mut': {
	    'missense_rec,inframe_rec,trunc_rec': {
		shapes: [{
			'type': 'rectangle',
			'fill': MUT_COLOR_MISSENSE,
			'x': '0%',
			'y': '33.33%',
			'width': '100%',
			'height': '33.33%',
			'z': 6
		}],
		legend_label: 'Mutation (putative driver)'
	    },
	    'missense,inframe,trunc,promoter,promoter_rec': { 
		shapes: [{
			'type': 'rectangle',
			'fill': MUT_COLOR_MISSENSE_PASSENGER,
			'x': '0%',
			'y': '33.33%',
			'width': '100%',
			'height': '33.33%',
			'z': 6
		}],
		legend_label: 'Mutation (putative passenger)'
	    },
	},
    })
});
window.geneticrules.genetic_rule_set_different_colors_no_recurrence = $.extend({}, baseRuleSetParams, {
    'rule_params': $.extend({}, non_mutation_rule_params, {
	'disp_mut': {
	    'promoter,promoter_rec': {
		shapes: [{
			'type': 'rectangle',
			'fill': MUT_COLOR_PROMOTER,
			'x': '0%',
			'y': '33.33%',
			'width': '100%',
			'height': '33.33%',
			'z': 6,
		    }],
		legend_label: 'Promoter Mutation'
	    },
	    'trunc,trunc_rec': {
		shapes: [{
			'type': 'rectangle',
			'fill': MUT_COLOR_TRUNC,
			'x': '0%',
			'y': '33.33%',
			'width': '100%',
			'height': '33.33%',
			'z': 6,
		    }],
		legend_label: 'Truncating Mutation',
	    },
	    'inframe,inframe_rec': {
		shapes: [{
			'type': 'rectangle',
			'fill': MUT_COLOR_INFRAME,
			'x': '0%',
			'y': '33.33%',
			'width': '100%',
			'height': '33.33%',
			'z': 6,
		    }],
		legend_label: 'Inframe Mutation',
	    },
	    'missense,missense_rec': {
		shapes: [{
			'type': 'rectangle',
			'fill': MUT_COLOR_MISSENSE,
			'x': '0%',
			'y': '33.33%',
			'width': '100%',
			'height': '33.33%',
			'z': 6,
		    }],
		legend_label: 'Missense Mutation',
	    },
	}
    })
});
window.geneticrules.genetic_rule_set_different_colors_recurrence = $.extend({}, baseRuleSetParams, {
    'rule_params': $.extend({}, non_mutation_rule_params, {
	'disp_mut': {
	    'promoter,promoter_rec': {
		shapes: [{
			'type': 'rectangle',
			'fill': MUT_COLOR_PROMOTER,
			'x': '0%',
			'y': '33.33%',
			'width': '100%',
			'height': '33.33%',
			'z': 6,
		    }],
		legend_label: 'Promoter Mutation'
	    },
	    'trunc_rec': {
		shapes: [{
			'type': 'rectangle',
			'fill': MUT_COLOR_TRUNC,
			'x': '0%',
			'y': '33.33%',
			'width': '100%',
			'height': '33.33%',
			'z': 6,
		    }],
		legend_label: 'Truncating Mutation (putative driver)',
	    },
	    'trunc': {
		shapes: [{
			'type': 'rectangle',
			'fill': MUT_COLOR_TRUNC_PASSENGER,
			'x': '0%',
			'y': '33.33%',
			'width': '100%',
			'height': '33.33%',
			'z': 6,
		    }],
		legend_label: 'Truncating Mutation (putative passenger)',
	    },
	    'inframe_rec': {
		shapes: [{
			'type': 'rectangle',
			'fill': MUT_COLOR_INFRAME,
			'x': '0%',
			'y': '33.33%',
			'width': '100%',
			'height': '33.33%',
			'z': 6,
		    }],
		legend_label: 'Inframe Mutation (putative driver)',
	    },
	    'inframe': {
		shapes: [{
			'type': 'rectangle',
			'fill': MUT_COLOR_INFRAME_PASSENGER,
			'x': '0%',
			'y': '33.33%',
			'width': '100%',
			'height': '33.33%',
			'z': 6,
		    }],
		legend_label: 'Inframe Mutation (putative passenger)',
	    },
	    'missense_rec': {
		shapes: [{
			'type': 'rectangle',
			'fill': MUT_COLOR_MISSENSE,
			'x': '0%',
			'y': '33.33%',
			'width': '100%',
			'height': '33.33%',
			'z': 6,
		    }],
		legend_label: 'Missense Mutation (putative driver)',
	    },
	    'missense': {
		shapes: [{
			'type': 'rectangle',
			'fill': MUT_COLOR_MISSENSE_PASSENGER,
			'x': '0%',
			'y': '33.33%',
			'width': '100%',
			'height': '33.33%',
			'z': 6,
		    }],
		legend_label: 'Missense Mutation (putative passenger)',
	    },
	}
    })
});
